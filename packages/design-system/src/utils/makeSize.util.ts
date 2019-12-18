import { modularScale, em, rem } from "polished";
import { ratioNames } from "polished/lib/helpers/modularScale";

import { Size } from "../primitives";
import { ResponsiveDeviceTypes } from "./makeResponsive";

type SizeUnits = "em" | "rem" | "px";
type ModularScaleRatio = keyof typeof ratioNames | number;
type Sizes = { [key in Size]: string };
type SizeScales = { [key in Size]: number };
type SizeMapValues = { [key in Size]: { [key in SizeUnits]: string } };
type SizeFn = (size: Size) => string;

interface SizeMap {
  size: SizeMapValues;
  fontSize: SizeMapValues;
  lineHeight: SizeMapValues;
}

interface SizeConfig {
  documentFontSize: string;
  modularScaleRatio: ModularScaleRatio;
  baseFontSize: string;
  sizeUnits: SizeUnits;
  lineHeight: number;
  baselineGrid: number;
  modularFontScale: number;
  spaceScale?: "linear" | "exponential";
  responsiveFontScaler?: number;
  responsiveFontSizes?: { [key in ResponsiveDeviceTypes]: string } | undefined;
  baselineGridSnapFactor: number;
}

// Base Variables
export const defaultDocumentFontSize = "16px";
const sizeUnitArr: SizeUnits[] = ["em", "px", "rem"];
const fontSizeScaleMap: SizeScales = {
  xxs: -2,
  xs: -1,
  sm: 0,
  md: 1,
  lg: 2,
  xl: 3,
  xxl: 4
};

// Default Configuration Variables
const defaultFontSize = "14px";
const defaultFontUnits: SizeUnits = "rem";
const defaultModularScaleRatio: ModularScaleRatio = "perfectFourth";
const defaultLineHeight = 1.4;

const defaultModularFontScale = ratioNames[defaultModularScaleRatio];
const defaultBaselineGrid = 4;
const defaultBaselineGridSnapFactor = 4;

// Size Configuration (always use this when accessing variables)
const sizeConfig: SizeConfig = {
  documentFontSize: defaultDocumentFontSize,
  modularScaleRatio: defaultModularScaleRatio,
  modularFontScale: defaultModularFontScale,
  baseFontSize: defaultFontSize,
  sizeUnits: defaultFontUnits,
  lineHeight: defaultLineHeight,
  baselineGrid: defaultBaselineGrid,
  baselineGridSnapFactor: defaultBaselineGridSnapFactor
};

type SnapToGrid = (
  fontSize: string,
  baselineGrid: number,
  options?: { multiplier: number }
) => string;

const snapToGrid: SnapToGrid = (fontSize, baselineGrid, options) => {
  const sep = fontSize.split(/(em|rem|px)/g);
  const value = Number(sep[0]);
  const transformedValue = options?.multiplier
    ? value * options.multiplier
    : value;
  const snappedValue =
    Math.round(transformedValue / baselineGrid) * baselineGrid;
  const units = sep[1];
  return `${snappedValue}${units}`;
};

const createSizes = () => {
  // this could obviously be better, but this was done for debugging purposes

  // 0. TBD - Determines type of design system that needs to be in place
  // default option =  baselineGrid w. modular scale

  // 1. adjust base font to align to snap to the grid
  const adjustedBaseFontSize = snapToGrid(
    sizeConfig.baseFontSize,
    sizeConfig.baselineGrid
  );
  console.log("adjustedBaseFontSize", adjustedBaseFontSize);

  const sizeArr = Object.keys(fontSizeScaleMap);
  // 2. create font size map based upon adjustedBaseFont
  const modularScaleFontSizeMap = Object.entries(fontSizeScaleMap).reduce(
    (accum, [key, value]) => ({
      ...accum,
      [key]: modularScale(
        value,
        adjustedBaseFontSize,
        sizeConfig.modularScaleRatio
      )
    }),
    {} as Sizes
  );
  console.log("modularScaleFontSizeMap", modularScaleFontSizeMap);

  // 3. round font size map to factor
  const snappedFontSizeMap = Object.entries(modularScaleFontSizeMap).reduce(
    (accum, [key, value]) => ({
      ...accum,
      [key]: snapToGrid(value, sizeConfig.baselineGrid)
    }),
    {} as Sizes
  );
  console.log("snappedFontSizeMap", snappedFontSizeMap);

  // 4. create line height size map based upon adjustedFontBase
  const snappedLineHeightMap = Object.entries(modularScaleFontSizeMap).reduce(
    (accum, [key, value]) => ({
      ...accum,
      [key]: snapToGrid(value, sizeConfig.baselineGrid, {
        multiplier: sizeConfig.lineHeight
      })
    }),
    {} as Sizes
  );
  console.log("snappedLineHeightMap", snappedLineHeightMap);

  const convertToUnits = (
    value: string,
    unit: SizeUnits,
    baseFontSize = sizeConfig.documentFontSize
  ): string => {
    console.log(value, unit, baseFontSize);
    if (unit === "em") return em(value, baseFontSize);
    if (unit === "rem") return rem(value, baseFontSize);
    return value;
  };

  const createSizeUnitMap = (sizeFn: SizeFn) =>
    sizeArr.reduce(
      (sAccum, size) => ({
        ...sAccum,
        [size]: sizeUnitArr.reduce(
          (uAccum, unit) => ({
            ...uAccum,
            [unit]: convertToUnits(sizeFn(size as Size), unit)
          }),
          {}
        )
      }),
      {}
    );

  return {
    size: createSizeUnitMap(
      size => snappedLineHeightMap[size]
    ) as SizeMap["size"],
    lineHeight: createSizeUnitMap(
      size => snappedLineHeightMap[size]
    ) as SizeMap["lineHeight"],
    fontSize: createSizeUnitMap(
      size => snappedFontSizeMap[size]
    ) as SizeMap["fontSize"]
  };
};

const createCustomSize = (customSize: string) => {
  console.warn(
    "You're using a custom size that falls outside the boundaries of the design system. All future updates to the design system will not have an affect on this value and instead will have to be manually changed or adjusted. Use with caution."
  );
  return customSize;
};

const sizeMap: SizeMap = createSizes();

console.log("sizeMap", sizeMap);

export const makeSize = ({
  size,
  custom = undefined
}: {
  size: Size;
  custom?: string | undefined;
}): string => {
  console.log(sizeMap);
  if (!custom) {
    return sizeMap.size[size][sizeConfig.sizeUnits];
  }
  return createCustomSize(custom);
};
