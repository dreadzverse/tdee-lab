/*
  Copyright (c) 2025 Dreadz
  SPDX-License-Identifier: Elastic-2.0
*/

import { describe, it, expect } from 'vitest';
import { calculateTDEE } from './tdee';
import type { TdeeInput } from '$lib/types';

type TestCase = {
  name: string;
  input: TdeeInput;
  expected: number;
};

const cases: TestCase[] = [
  {
    name: 'Male - Moderate',
    input: {
      sex: 'male',
      age: 30,
      weight: 75,
      height: 180,
      activityLevel: 'moderate',
    },
    expected: 2682,
  },
  {
    name: 'Female - Sedentary',
    input: {
      sex: 'female',
      age: 25,
      weight: 60,
      height: 165,
      activityLevel: 'sedentary',
    },
    expected: 1614,
  },
  {
    name: 'Male - Athlete',
    input: {
      sex: 'male',
      age: 40,
      weight: 90,
      height: 185,
      activityLevel: 'athlete',
    },
    expected: 3536,
  },
];

describe('Calculate TDEE', () => {
  it.each(cases)('$name', (c) => {
    const result = calculateTDEE(c.input);

    expect(result).toBe(c.expected);
  });
});
