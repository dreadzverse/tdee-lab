/*
  Copyright (c) 2025 Dreadz
  SPDX-License-Identifier: Elastic-2.0
*/

import { describe, it, expect } from 'vitest';
import { calculateTDEE } from './tdee';

type TestCase = {
  name: string;
  gender: 'male' | 'female';
  age: number;
  weight: number;
  height: number;
  activity: 'sedentary' | 'light' | 'moderate' | 'heavy' | 'athlete';
  expected: number;
};

const cases: TestCase[] = [
  {
    name: 'Male - Moderate',
    gender: 'male',
    age: 30,
    weight: 75,
    height: 180,
    activity: 'moderate',
    expected: 2682,
  },
  {
    name: 'Female - Sedentary',
    gender: 'female',
    age: 25,
    weight: 60,
    height: 165,
    activity: 'sedentary',
    expected: 1614,
  },
  {
    name: 'Male - Athlete',
    gender: 'male',
    age: 40,
    weight: 90,
    height: 185,
    activity: 'athlete',
    expected: 3536,
  },
];

describe('Calculate TDEE', () => {
  it.each(cases)('$name', (c) => {
    const result = calculateTDEE(c.gender, c.age, c.weight, c.height, c.activity);

    expect(Math.round(result)).toBe(c.expected);
  });
});
