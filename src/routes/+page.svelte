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

<main class="flex flex-col gap-16 items-center mx-auto max-w-3xl">
  <div class="flex flex-col gap-4 items-center">
    <h1 class="text-3xl font-bold">TDEE Calculator</h1>
    <p class="leading-8 text-center">
      Calculate your <strong>Total Daily Energy Expenditure</strong> to find how many calories you need
      per day based on your body and activity level.
    </p>
  </div>
  <CalculatorForm {data} />
  <section class="flex flex-col gap-2 leading-7">
    <h2 class="text-2xl">How TDEE Is Calculated</h2>
    <p>
      Your <strong>Total Daily Energy Expenditure (TDEE)</strong> estimates the calories you burn
      each day by combining your body’s resting energy, measured as
      <strong>Basal Metabolic Rate (BMR)</strong>, with the energy spent on daily activities. BMR
      accounts for the calories needed to maintain essential functions like breathing and
      circulation, while your activity level, including exercise and everyday movement, adjusts that
      number to reflect your true daily needs. Our TDEE calculator uses your sex, age, weight, and
      height to estimate BMR and then applies an activity factor, giving a clear and realistic
      estimate of the calories your body burns each day.
    </p>
  </section>
</main>
