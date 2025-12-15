/*
  Copyright (c) 2025 Dreadz
  SPDX-License-Identifier: Elastic-2.0
*/

export const SEXES = ['male', 'female'] as const;
export type Sex = (typeof SEXES)[number];

export const ACTIVITY_LEVEL = ['sedentary', 'light', 'moderate', 'heavy', 'athlete'] as const;
export type ActivityLevel = (typeof ACTIVITY_LEVEL)[number];

export interface TdeeInput {
  sex: Sex;
  age: number;
  weight: number;
  height: number;
  activityLevel: ActivityLevel;
}
