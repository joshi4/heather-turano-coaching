import { FontFaceConfiguration } from "polished/lib/types/fontFaceConfiguration";

import { Primitive, Composite } from "../types";

export interface FontFamilyDefinitionOptions {
  family: Composite.Font__Family;
  variants: {
    [type in Exclude<
      Composite.Font__Style,
      "bold"
    >]: Composite.Font__WeightValue[];
  };
}

export interface FontFamilyDefinition {
  source: Composite.Font__FamilyType;
  options: FontFamilyDefinitionOptions | FontFaceConfiguration;
}

export interface FontConfig {
  defaults: {
    fontFamily: Composite.Font__Family;
    fontStyle: Composite.Font__Style;
    fontWeight: Composite.Font__WeightName;
  };
  headingSizeMap: {
    [key in Composite.Size__Headings]: Primitive.Size;
  };
  fontWeightMap: {
    [key in Composite.Font__WeightName]: Composite.Font__WeightValue;
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
