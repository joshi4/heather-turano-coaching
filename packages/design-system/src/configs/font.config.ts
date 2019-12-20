import { fontFace } from "polished";
import { Styles } from "polished/lib/types/style";
import { FontFaceConfiguration } from "polished/lib/types/fontFaceConfiguration";

import { Primitive, Composite } from "../types";

type HeadingSizeMap = {
  [key in Composite.HeadingSizes]: Primitive.Size;
};

export const headingSizeMap: HeadingSizeMap = {
  h1: "xxl",
  h2: "xl",
  h3: "lg",
  h4: "md",
  h5: "sm"
};

export const fontWeightMap: {
  [key in Composite.FontWeightName]: Composite.FontWeightValue;
} = {
  thin: "100",
  "extra-light": "200",
  light: "300",
  regular: "400",
  medium: "500",
  "semi-bold": "600",
  bold: "700",
  "extra-bold": "800",
  black: "900"
};

// Inspiration: https://jonneal.dev/system-font-css/

type SystemFontOsMap = {
  [key in Composite.FontOS]: string[];
};
type SystemFontStyleKey = Exclude<Composite.FontStyle, "bold">;
type SystemFontStyleMap = {
  [key in SystemFontStyleKey]: SystemFontOsMap;
};
type SystemFontWeightKey = Extract<
  Composite.FontWeightName,
  "light" | "regular" | "medium" | "bold"
>;
type SystemFontMap = {
  [key in SystemFontWeightKey]: SystemFontStyleMap;
};

export const systemFontMap: SystemFontMap = {
  light: {
    normal: {
      OSX: [
        ".SFNS-Light",
        ".SFNSText-Light",
        ".HelveticaNeueDeskInterface-Light",
        ".LucidaGrandeUI"
      ],
      windows: ["Segoe UI Light", "Tahoma"],
      android: ["Roboto-LightItalic", "DroidSans"],
      ubuntu: ["Ubuntu Light"]
    },
    italic: {
      OSX: [
        ".SFNS-LightItalic",
        ".SFNSText-LightItalic",
        ".HelveticaNeueDeskInterface-Italic",
        ".LucidaGrandeUI"
      ],
      windows: ["Segoe UI Light Italic", "Tahoma"],
      android: ["Roboto-Light", "DroidSans"],
      ubuntu: ["Ubuntu Light Italic"]
    }
  },
  regular: {
    normal: {
      OSX: [
        ".SFNS-Regular",
        ".SFNSText-Regular",
        ".HelveticaNeueDeskInterface-Regular",
        ".LucidaGrandeUI"
      ],
      windows: ["Segoe UI", "Tahoma"],
      android: ["Roboto-Regular", "DroidSans"],
      ubuntu: ["Ubuntu"]
    },
    italic: {
      OSX: [
        ".SFNS-Italic",
        ".SFNSText-Italic",
        ".HelveticaNeueDeskInterface-Italic",
        ".LucidaGrandeUI"
      ],
      windows: ["Segoe UI Italic", "Tahoma"],
      android: ["Roboto-Italic", "DroidSans"],
      ubuntu: ["Ubuntu Italic"]
    }
  },
  medium: {
    normal: {
      OSX: [
        ".SFNS-Medium",
        ".SFNSText-Medium",
        ".HelveticaNeueDeskInterface-MediumP4",
        ".LucidaGrandeUI"
      ],
      windows: ["Segoe UI Semibold", "Tahoma Bold"],
      android: ["Roboto-Medium", "DroidSans"],
      ubuntu: ["Ubuntu Medium"]
    },
    italic: {
      OSX: [
        ".SFNS-MediumItalic",
        ".SFNSText-MediumItalic",
        ".HelveticaNeueDeskInterface-MediumItalicP4",
        ".LucidaGrandeUI"
      ],
      windows: ["Segoe UI Semibold Italic", "Tahoma Bold"],
      android: ["Roboto-MediumItalic", "DroidSans"],
      ubuntu: ["Ubuntu Medium Italic"]
    }
  },
  bold: {
    normal: {
      OSX: [
        ".SFNS-Bold",
        ".SFNSText-Bold",
        ".HelveticaNeueDeskInterface-Bold",
        ".LucidaGrandeUI"
      ],
      windows: ["Segoe UI Bold", "Tahoma Bold"],
      android: ["Roboto-Bold", "DroidSans"],
      ubuntu: ["Ubuntu Bold"]
    },
    italic: {
      OSX: [
        ".SFNS-BoldItalic",
        ".SFNSText-BoldItalic",
        ".HelveticaNeueDeskInterface-BoldItalic",
        ".LucidaGrandeUI"
      ],
      windows: ["Segoe UI Bold Italic", "Tahoma Bold"],
      android: ["Roboto-BoldItalic", "DroidSans"],
      ubuntu: ["Ubuntu Bold Italic"]
    }
  }
};

const defaultFontFamily: Composite.FontFamily = "system";
const defaultFontStyle: Composite.FontStyle = "normal";
const defaultFontWeight: Composite.FontWeightName = "regular";

const defaultFontFaceType: Composite.FontFaceType = "system";
export interface FontConfig {
  fontFamily: Composite.FontFamily;
  fontStyle: Composite.FontStyle;
  fontWeight: Composite.FontWeightName;
}
export const fontConfig: FontConfig = {
  fontFamily: defaultFontFamily,
  fontStyle: defaultFontStyle,
  fontWeight: defaultFontWeight
};

export interface FontFaceConfig {
  fontFaceType: Composite.FontFaceType;
  fontFaceDefinition?: FontFaceConfiguration & FontConfig;
}

export const fontFaceConfig: FontFaceConfig = {
  fontFaceType: defaultFontFaceType
};

const createDefaultFontStyle = ({
  fontStyle,
  fontWeight,
  fontOsObj,
  fontFamily = "system"
}: {
  fontStyle: Composite.FontStyle;
  fontWeight: Composite.FontWeightName;
  fontOsObj: SystemFontOsMap;
  fontFamily?: Composite.FontFamily;
}): Styles =>
  fontFace({
    fontFamily,
    fontStyle,
    fontWeight: fontWeightMap[fontWeight],
    localFonts: Object.values(fontOsObj).reduce(
      (accum, osFontArr) => [...accum, ...osFontArr],
      []
    )
  });

export const systemFontFaceDefinition: Styles[] = Object.entries<
  SystemFontStyleMap
>(systemFontMap).reduce(
  (accumWeight, [fontWeightKey, SystemFontStyleMap]) => [
    ...accumWeight,
    ...Object.entries(SystemFontStyleMap).reduce(
      (accumStyle, [fontStyleKey, fontOsObj]) => [
        ...accumStyle,
        createDefaultFontStyle({
          fontWeight: fontWeightKey as SystemFontWeightKey,
          fontStyle: fontStyleKey as SystemFontStyleKey,
          fontOsObj
        })
      ],
      [] as Styles[]
    )
  ],
  [] as Styles[]
);
