import { Size } from "../primitive";
import { Size__Headings } from "./size.composite";
import { ColorProperties } from "./color.composite";

export type Font__Size = Size & Size__Headings;
export type Font__FamilyType = "system" | "user-defined" | "google";
export type Font__Family = "system" | "Montserrat" | "Raleway";
export type Font__Style = "normal" | "italic";
export type Font__WeightValue =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";
export type Font__WeightName =
  | "thin"
  | "extra-light"
  | "light"
  | "regular"
  | "medium"
  | "semi-bold"
  | "bold"
  | "extra-bold"
  | "black";
export type Font__OS = "OSX" | "windows" | "android" | "ubuntu";

export interface FontProperties {
  fontSize: Size | Size__Headings;
  lineHeight?: Size;
  fontFamily?: Font__Family;
  fontWeight?: Font__WeightName;
  fontStyle?: Font__Style;
  fontColor?: ColorProperties | undefined;
  custom?: {
    fontSize: string;
    lineHeight?: string;
    fontFamily?: Font__Family;
    fontWeight?: Font__WeightName;
    fontStyle?: Font__Style;
    fontColor: ColorProperties | undefined;
  };
}
