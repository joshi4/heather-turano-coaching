import { FontFaceConfiguration } from "polished/lib/types/fontFaceConfiguration";

import { Size } from "../types/primitive";
import {
  Font__Family,
  Font__Style,
  Font__WeightValue,
  Font__FamilyType,
  Font__WeightName,
  Size__Headings
} from "../types/composite";

export interface FontFamilyDefinitionOptions {
  family: Font__Family;
  variants: {
    [type in Exclude<Font__Style, "bold">]: Font__WeightValue[];
  };
}

export interface FontFamilyDefinition {
  source: Font__FamilyType;
  options: FontFamilyDefinitionOptions | FontFaceConfiguration;
}

export interface FontConfig {
  defaults: {
    fontFamily: Font__Family;
    fontStyle: Font__Style;
    fontWeight: Font__WeightName;
  };
  headingSizeMap: {
    [key in Size__Headings]: Size;
  };
  fontWeightMap: {
    [key in Font__WeightName]: Font__WeightValue;
  };
  fontFamilyDefinitions: FontFamilyDefinition[];
}
export const fontConfig: FontConfig = {
  defaults: {
    fontFamily: "system",
    fontStyle: "normal",
    fontWeight: "regular"
  },
  headingSizeMap: {
    h1: "xxl",
    h2: "xl",
    h3: "lg",
    h4: "md",
    h5: "sm"
  },
  fontWeightMap: {
    thin: "100",
    "extra-light": "200",
    light: "300",
    regular: "400",
    medium: "500",
    "semi-bold": "600",
    bold: "700",
    "extra-bold": "800",
    black: "900"
  },
  fontFamilyDefinitions: [
    {
      source: "google",
      options: {
        family: "Montserrat",
        variants: {
          italic: ["400", "500"],
          normal: [
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900"
          ]
        }
      }
    },
    {
      source: "google",
      options: {
        family: "Raleway",
        variants: {
          italic: ["300", "400"],
          normal: [
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900"
          ]
        }
      }
    }
  ]
};
