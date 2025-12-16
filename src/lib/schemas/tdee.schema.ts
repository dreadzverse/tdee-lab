/*
  Copyright (c) 2025 Dreadz
  SPDX-License-Identifier: Elastic-2.0
*/

import * as z from 'zod';
import { SEXES, ACTIVITY_LEVEL } from '$lib/types';

export const TdeeSchema = z.object({
  gender: z.enum(SEXES),
  age: z.number().int().min(10).max(120),
  weight: z.number().min(30).max(300),
  height: z.number().min(100).max(250),
  activityLevel: z.enum(ACTIVITY_LEVEL),
});

export type TdeeSchema = z.infer<typeof TdeeSchema>;
