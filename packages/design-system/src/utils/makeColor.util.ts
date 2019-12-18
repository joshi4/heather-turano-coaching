import { mix } from "polished";

import Color, {
  ColorScalable,
  ColorStatic
} from "../primitives/color.primitive";

/**
 * @todo Convert ColorHex to actual type-checked regex value
 * https://github.com/Microsoft/TypeScript/issues/6579
 */
type ColorHex = string;
type ColorScales = [ColorHex, ColorHex, ColorHex, ColorHex, ColorHex];
type ColorScalePosition = 0 | 1 | 2 | 3 | 4;
type ColorBlendRatios = 0.2 | 0.4 | 0.6 | 0.8 | 0;
type ColorTypes = "scalable" | "static" | "custom";

type ColorValueScalable = { [key in ColorScalable]: ColorHex };
type ColorValueStatic = { [key in ColorStatic]: ColorHex };

type ColorMapScalable = { [key in ColorScalable]: ColorScales };
type ColorMapStatic = { [key in ColorStatic]: ColorHex };
type ColorMapCustom = any;

type ColorMaps = ColorMapScalable | ColorMapStatic | ColorMapCustom;
type Colors = { [key in ColorTypes]: ColorMaps };

const scalableColorValues: ColorValueScalable = {
  primary: "#bf9f5a",
  secondary: "#4e8588",
  accent: "#9ac371",
  grayscale: "#4a4a4a",
  lightscale: "#eaecec",
  success: "#29a784",
  warning: "#f8e71c",
  error: "#d0021b"
};

const staticColorValues: ColorValueStatic = {
  light: "#fff",
  dark: "#000"
};

const createColor = (
  scaler: ColorBlendRatios,
  color: ColorScalable
): ColorHex => mix(scaler, staticColorValues.light, scalableColorValues[color]);

const createColorScale = (hex: ColorScalable): ColorScales => [
  createColor(0.2, hex),
  createColor(0.4, hex),
  createColor(0.6, hex),
  createColor(0.8, hex),
  createColor(0, hex)
];

const scalableColorMap: ColorMapScalable = {
  primary: createColorScale("primary"),
  secondary: createColorScale("secondary"),
  accent: createColorScale("accent"),
  grayscale: createColorScale("grayscale"),
  lightscale: createColorScale("lightscale"),
  success: createColorScale("success"),
  warning: createColorScale("warning"),
  error: createColorScale("error")
};

const staticColorMap: ColorMapStatic = {
  light: staticColorValues.light,
  dark: staticColorValues.dark
};

const colors: Colors = {
  scalable: scalableColorMap,
  static: staticColorMap,
  custom: (color: any) => {
    console.warn(
      "You're attempting to use a custom color that falls outside of the design system. This color will not be regulated by the design system any longer and thusly isn't type-safe. You'll be required to update this value manually for any subsequent changes. Use with cation."
    );
    console.log(color);
    return color;
  }
};

type MakeColor = (options: {
  type: ColorTypes;
  color: Color;
  scale?: ColorScalePosition;
}) => ColorHex;

export const makeColor: MakeColor = ({ type, color, scale = 4 }) => {
  if (type === "scalable") {
    console.log(colors[type][color]);
    return colors[type][color][scale];
  }
  if (type === "static") {
    return colors[type][color];
  }
  return colors[type](color);
};
