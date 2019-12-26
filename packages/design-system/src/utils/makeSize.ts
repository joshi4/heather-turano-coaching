import { em, rem, modularScale } from "polished";

import { Size } from "../types/primitive";
import { Size__Units } from "../types/composite";

import { sizeConfig } from "../configs";

// if (__DEV__) console.log(sizeConfig);

type Sizes = { [key in Size]: string };
type SizeFn = (size: Size) => string;

type SizeMapValues = {
  [key in Size]: { [key in Size__Units]: string };
};

interface SizeMap {
  size: SizeMapValues;
  fontSize: SizeMapValues;
  lineHeight: SizeMapValues;
}

type SnapToGrid = (
  fontSize: string,
  baselineGrid: number,
  options?: { multiplier: number }
) => string;

const sizeUnitArr: Size__Units[] = ["em", "px", "rem"];
const sizeArr = Object.keys(sizeConfig.fontSizeScaleMap);

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

const convertToUnits = (
  value: string,
  unit: Size__Units,
  baseFontSize = sizeConfig.documentFontSize
): string => {
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

const createSizes = () => {
  // this could obviously be better, but this was done for debugging purposes

  // 0. TBD - Determines type of design system that needs to be in place
  // default option =  baselineGrid w. modular scale

  // 1. adjust base font to align to snap to the grid
  const adjustedBaseFontSize = snapToGrid(
    sizeConfig.baseFontSize,
    sizeConfig.baselineGrid
  );
  // if (__DEV__) console.log("adjustedBaseFontSize", adjustedBaseFontSize);

  // 2. create font size map based upon adjustedBaseFont
  const modularScaleFontSizeMap = Object.entries(
    sizeConfig.fontSizeScaleMap
  ).reduce(
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
  // if (__DEV__) console.log("modularScaleFontSizeMap", modularScaleFontSizeMap);

  // 3. round font size map to factor
  const snappedFontSizeMap = Object.entries(modularScaleFontSizeMap).reduce(
    (accum, [key, value]) => ({
      ...accum,
      [key]: snapToGrid(value, sizeConfig.baselineGrid)
    }),
    {} as Sizes
  );
  // if (__DEV__) console.log("snappedFontSizeMap", snappedFontSizeMap);

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
  // if (__DEV__) console.log("snappedLineHeightMap", snappedLineHeightMap);

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

export const createCustomSize = (customSize: string | number) => {
  console.warn(
    "You're using a custom size that falls outside the boundaries of the design system. All future updates to the design system will not have an affect on this value and instead will have to be manually changed or adjusted. Use with caution."
  );
  return customSize as string;
};

export const sizeMap: SizeMap = createSizes();

// if (__DEV__) console.log("sizeMap", sizeMap);

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