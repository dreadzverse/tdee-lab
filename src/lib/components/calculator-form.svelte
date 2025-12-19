<!--   
  Copyright (c) 2025 Dreadz
  SPDX-License-Identifier: Elastic-2.0
-->

<script lang="ts">
  import * as Form from '$lib/components/ui/form/index';
  import * as Select from '$lib/components/ui/select/index';
  import { Input } from '$lib/components/ui/input/index';
  import { Button } from '$lib/components/ui/button/index';
  import { tdeeSchema } from '$lib/schemas/tdee.schema';
  import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
  import { zod4Client } from 'sveltekit-superforms/adapters';

  let { data }: { data: { form: SuperValidated<Infer<typeof tdeeSchema>> } } = $props();

  const sForm = superForm(data.form, {
    validators: zod4Client(tdeeSchema),
  });

  const { form, enhance, reset } = sForm;

  const sexes = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];

  const activityLevels = [
    { value: 'sedentary', label: 'Sedentary (Office job)' },
    { value: 'light', label: 'Light (1-2 days/week)' },
    { value: 'moderate', label: 'Moderate (3-5 days/week)' },
    { value: 'heavy', label: 'Heavy (6-7 days/week)' },
    { value: 'athlete', label: 'Athlete (2x per day)' },
  ];
</script>

<form method="POST" use:enhance class="flex flex-col gap-2">
  <Form.Field form={sForm} name="sex">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Sex</Form.Label>
        <Select.Root type="single" bind:value={$form.sex} name={props.name}>
          <Select.Trigger class="w-full" {...props}
            >{sexes.find((s) => s.value === $form.sex)?.label ??
              'Select your biological sex'}</Select.Trigger
          >
          <Select.Content>
            {#each sexes as sex (sex.value)}
              <Select.Item {...sex} />
            {/each}
          </Select.Content>
        </Select.Root>
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field form={sForm} name="age">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Age</Form.Label>
        <Input type="number" placeholder="Enter your age" {...props} bind:value={$form.age} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field form={sForm} name="weight">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Weight</Form.Label>
        <Input type="number" placeholder="Enter your weight" {...props} bind:value={$form.weight} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field form={sForm} name="height">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Height</Form.Label>
        <Input type="number" placeholder="Enter your height" {...props} bind:value={$form.height} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field form={sForm} name="activityLevel">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Activity Level</Form.Label>
        <Select.Root type="single" bind:value={$form.activityLevel} name={props.name}>
          <Select.Trigger class="w-full" {...props}
            >{activityLevels.find((a) => a.value === $form.activityLevel)?.label ??
              'Select your activity level'}</Select.Trigger
          >
          <Select.Content>
            {#each activityLevels as activityLevel (activityLevel.value)}
              <Select.Item {...activityLevel} />
            {/each}
          </Select.Content>
        </Select.Root>
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <div class="flex justify-between">
    <Button type="button" variant="destructive" onclick={() => reset()}>Reset</Button>
    <Form.Button>Calculate</Form.Button>
  </div>
</form>
