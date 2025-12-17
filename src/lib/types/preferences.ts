/*
  Copyright (c) 2025 Dreadz
  SPDX-License-Identifier: Elastic-2.0
*/

export const MEASUREMENT_SYSTEMS = ['metric', 'imperial'] as const;
export type MeasurementSystem = (typeof MEASUREMENT_SYSTEMS)[number];
