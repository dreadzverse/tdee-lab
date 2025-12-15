/*
  Copyright (c) 2025 Dreadz
  SPDX-License-Identifier: Elastic-2.0
*/

type Gender = 'male' | 'female';

type Activity = 'sedentary' | 'light' | 'moderate' | 'heavy' | 'athlete';

const activitiesScaleFactor: Record<Activity, number> = {
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

  The BMR is then multiplied by an activity-specific scale factor to produce
  the final TDEE value.
*/
export function calculateTDEE(
  gender: Gender,
  age: number,
  weight: number,
  height: number,
  activityLevel: Activity,
): number {
  const bmr = 10 * weight + 6.25 * height - 5 * age + (gender === 'male' ? +5 : -161);

  return Math.round(bmr * activitiesScaleFactor[activityLevel]);
}
