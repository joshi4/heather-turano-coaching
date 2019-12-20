import * as Primitive from "../primitive";

export type HeadingSizes = "h1" | "h2" | "h3" | "h4" | "h5";

export type FontSize = Primitive.Size & HeadingSizes;
export type FontFaceType = "system" | "custom";
export type FontFamily = "system";
export type FontStyle = "normal" | "bold" | "italic";
export type FontWeightValue =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";
export type FontWeightName =
  | "thin"
  | "extra-light"
  | "light"
  | "regular"
  | "medium"
  | "semi-bold"
  | "bold"
  | "extra-bold"
  | "black";
export type FontOS = "OSX" | "windows" | "android" | "ubuntu";
