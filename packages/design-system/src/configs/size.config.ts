import { ratioNames } from "polished/lib/helpers/modularScale";

import {
  Size__ModularScaleRatio,
  Size__Units,
  Size__Scales
} from "../types/composite";

import { ResponsiveDeviceTypes } from "./responsive.config";

export interface SizeConfig {
  documentFontSize: string;
  modularScaleRatio: Size__ModularScaleRatio;
  baseFontSize: string;
  sizeUnits: Size__Units;
  lineHeight: number;
  baselineGrid: number;
  modularFontScale: number;
  spaceScale?: "linear" | "exponential";
  responsiveFontScaler?: number;
  responsiveFontSizes?: { [key in ResponsiveDeviceTypes]: string } | undefined;
  baselineGridSnapFactor: number;
  fontSizeScaleMap: Size__Scales;
}

// Modular Scale Initializers
const modularScaleRatio: Size__ModularScaleRatio = "perfectFourth";
const modularFontScale = ratioNames[modularScaleRatio];

// Primitive.size Configuration (always use this when accessing variables)
export const sizeConfig: SizeConfig = {
  documentFontSize: "16px",
  modularScaleRatio,
  modularFontScale,
  baseFontSize: "14px",
  sizeUnits: "rem",
  lineHeight: 1.4,
  baselineGrid: 4,
  baselineGridSnapFactor: 4,
  fontSizeScaleMap: {
    xxs: -2,
    xs: -1,
    sm: 0,
    md: 1,
    lg: 2,
    xl: 3,
    xxl: 4
  }
};