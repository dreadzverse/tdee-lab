/*
  Copyright (c) 2025 Dreadz
  SPDX-License-Identifier: Elastic-2.0
*/

import type { TdeeInput, ActivityLevel } from '$lib/types';

const ACTIVITY_FACTORS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  heavy: 1.725,
  athlete: 1.9,
};

/*
  Calculates Total Daily Energy Expenditure (TDEE).

  Uses the Mifflin–St Jeor equation to compute Basal Metabolic Rate (BMR):

    Men:    (10 * weight [kg]) + (6.25 * height [cm]) – (5 * age [years]) + 5
    Women:  (10 * weight [kg]) + (6.25 * height [cm]) – (5 * age [years]) – 161

  The BMR is then multiplied by an activity factor to produce
  the final TDEE value.
*/
export function calculateTDEE(tdeeInput: TdeeInput): number {
  const { sex, age, weight, height, activityLevel } = tdeeInput;

  const bmr = 10 * weight + 6.25 * height - 5 * age + (sex === 'male' ? +5 : -161);

  return Math.round(bmr * ACTIVITY_FACTORS[activityLevel]);
}
