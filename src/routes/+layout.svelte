<!--   
  Copyright (c) 2025 Dreadz
  SPDX-License-Identifier: Elastic-2.0
-->

<script lang="ts">
  import SunIcon from '@lucide/svelte/icons/sun';
  import MoonIcon from '@lucide/svelte/icons/moon';

  import { SiGithub } from '@icons-pack/svelte-simple-icons';

  import * as Select from '$lib/components/ui/select/index';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';

  import { Button, buttonVariants } from '$lib/components/ui/button/index';

  import { resetMode, setMode } from 'mode-watcher';
  import { ModeWatcher } from 'mode-watcher';

  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';

  import { browser } from '$app/environment';

  import { MEASUREMENT_SYSTEMS } from '$lib/types';
  import type { MeasurementSystem } from '$lib/types';

  let { children, data } = $props();

  function setCookie(
    name: string,
    value: string,
    options?: {
      maxAge?: number;
      path?: string;
      sameSite?: 'lax' | 'strict' | 'none';
      secure?: boolean;
    },
  ) {
    if (!browser) {
      return;
    }

    const cookie: string[] = [`${name}=${encodeURIComponent(value)}`];

    if (options?.maxAge !== undefined) cookie.push(`Max-Age=${options.maxAge}`);
    if (options?.path) cookie.push(`Path=${options.path}`);
    if (options?.sameSite) cookie.push(`SameSite=${options.sameSite}`);
    if (options?.secure) cookie.push('Secure');

    document.cookie = cookie.join('; ');
  }

  let measurementSystem: MeasurementSystem = $state(
    MEASUREMENT_SYSTEMS.includes(data.measurementSystem as MeasurementSystem)
      ? (data.measurementSystem as MeasurementSystem)
      : 'metric',
  );

  $effect(() => {
    setCookie('tl-ms', measurementSystem, {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
      sameSite: 'lax',
      secure: import.meta.env.PROD,
    });
  });

  type MeasurementSystemsSelectItems = {
    label: string;
    value: MeasurementSystem;
  };

  const measurementSystemsSelectItems: MeasurementSystemsSelectItems[] = [
    { label: 'Metric', value: 'metric' },
    { label: 'Imperial', value: 'imperial' },
  ];

  const measurementSystemsTriggerContent = $derived(
    measurementSystemsSelectItems.find((ms) => ms.value === measurementSystem)?.label ??
      'Select measurement system',
  );
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />

<header class="flex justify-between items-center p-8 w-full">
  <a href="/" class="text-2xl/7"> TDEE Lab </a>
  <div class="flex gap-4 items-center">
    <Button
      href="https://github.com/dreadzverse/tdee-lab"
      target="_blank"
      variant="outline"
      size="icon"
      aria-label="GitHub Repository"
    >
      <SiGithub />
    </Button>
    <Select.Root type="single" bind:value={measurementSystem}>
      <Select.Trigger class="min-w-32" aria-label="Select Measurement System">
        {measurementSystemsTriggerContent}
      </Select.Trigger>
      <Select.Content>
        {#each measurementSystemsSelectItems as ms (ms.value)}
          <Select.Item value={ms.value}>{ms.label}</Select.Item>
        {/each}
      </Select.Content>
    </Select.Root>

    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        class={buttonVariants({ variant: 'outline', size: 'icon' })}
        aria-label="Select Theme"
      >
        <SunIcon
          class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"
        />
        <MoonIcon
          class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content sideOffset={8} align="end">
        <DropdownMenu.Item onclick={() => setMode('light')}>Light</DropdownMenu.Item>
        <DropdownMenu.Item onclick={() => setMode('dark')}>Dark</DropdownMenu.Item>
        <DropdownMenu.Item onclick={() => resetMode()}>System</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </div>
</header>

{@render children()}
