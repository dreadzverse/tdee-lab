/*
  Copyright (c) 2025 Dreadz
  SPDX-License-Identifier: Elastic-2.0
*/

import * as z from 'zod';
import { SEXES, ACTIVITY_LEVEL } from '$lib/types';

export const tdeeSchema = z.object({
  sex: z.enum(SEXES).optional(),
  age: z.number().int().min(10).max(120).optional(),
  weight: z.number().min(30).max(300).optional(),
  height: z.number().min(100).max(250).optional(),
  activityLevel: z.enum(ACTIVITY_LEVEL).optional(),
});

export type TdeeSchema = z.infer<typeof tdeeSchema>;
