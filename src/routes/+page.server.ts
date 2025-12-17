/*
  Copyright (c) 2025 Dreadz
  SPDX-License-Identifier: Elastic-2.0
*/

import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { tdeeSchema } from '$lib/schemas/tdee.schema';

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod4(tdeeSchema)),
  };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod4(tdeeSchema));
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }

    return { form };
  },
};
