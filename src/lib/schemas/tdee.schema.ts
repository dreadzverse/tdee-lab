/*
  Copyright (c) 2025 Dreadz
  SPDX-License-Identifier: Elastic-2.0
*/

import * as z from 'zod';
import { SEXES, ACTIVITY_LEVEL } from '$lib/types';

const MIN_AGE = 10;
const MAX_AGE = 120;

const MIN_WEIGHT = 30;
const MAX_WEIGHT = 300;

const MIN_HEIGHT = 100;
const MAX_HEIGHT = 250;

export const tdeeSchema = z.object({
  sex: z.enum(SEXES, 'Sex is required').optional(),
  age: z
    .number()
    .int()
    .min(MIN_AGE, `Age must be at least ${MIN_AGE}`)
    .max(MAX_AGE, `Age must be at most ${MAX_AGE}`)
    .optional()
    .refine((v) => v !== undefined, {
      message: 'Age is required',
    }),
  weight: z
    .number()
    .min(MIN_WEIGHT, `Weight must be at least ${MIN_WEIGHT}`)
    .max(MAX_WEIGHT, `Weight must be at most ${MAX_WEIGHT}`)
    .optional()
    .refine((v) => v !== undefined, {
      message: 'Weight is required',
    }),
  height: z
    .number()
    .min(MIN_HEIGHT, `Height must be at least ${MIN_HEIGHT}`)
    .max(MAX_HEIGHT, `Height must be at most ${MAX_HEIGHT}`)
    .optional()
    .refine((v) => v !== undefined, {
      message: 'Height is required',
    }),
  activityLevel: z.enum(ACTIVITY_LEVEL, 'Activity Level is required').optional(),
});

export type TdeeSchema = z.infer<typeof tdeeSchema>;
