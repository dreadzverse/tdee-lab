<!--   
  Copyright (c) 2025 Dreadz
  SPDX-License-Identifier: Elastic-2.0
-->

<script lang="ts">
  import type { PageData } from './$types';
  import CalculatorForm from '$lib/components/calculator-form.svelte';

  let { data }: { data: PageData } = $props();

  const APP_NAME: string = 'TDEE Lab';
</script>

<svelte:head>
  <title>{APP_NAME}</title>
  <meta
    name="description"
    content="Estimate your daily calorie needs with our TDEE calculator. Quickly calculate your Total Daily Energy Expenditure based on your sex, age, weight, height, and activity level."
  />
</svelte:head>

<main class="flex justify-center">
  <CalculatorForm {data} />
</main>
