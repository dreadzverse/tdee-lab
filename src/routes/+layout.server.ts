/*
  Copyright (c) 2025 Dreadz
  SPDX-License-Identifier: Elastic-2.0
*/

import type { LayoutServerLoad } from './$types';

import type { MeasurementSystem } from '$lib/types';

const MEASUREMENT_SYSTEM_COOKIE_NAME = 'tl-ms';
const DEFAULT_MEASUREMENT_SYSTEM = 'metric';

export const load: LayoutServerLoad = async ({ cookies }) => {
  const stored = cookies.get(MEASUREMENT_SYSTEM_COOKIE_NAME);

  if (stored === 'metric' || stored === 'imperial') {
    return { measurementSystem: stored };
  }

  const measurementSystem: MeasurementSystem = DEFAULT_MEASUREMENT_SYSTEM;

  cookies.set(MEASUREMENT_SYSTEM_COOKIE_NAME, DEFAULT_MEASUREMENT_SYSTEM, {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365,
  });

  return { measurementSystem };
};
