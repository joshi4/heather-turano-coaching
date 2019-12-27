import { ratioNames } from "polished/lib/helpers/modularScale";
import { Size } from "../primitive";

export type Size__Units = "em" | "rem" | "px";
export type Size__ModularScaleRatio = keyof typeof ratioNames | number;
export type Size__Scales = { [key in Size]: number };
export type Size__Headings = "h1" | "h2" | "h3" | "h4" | "h5";

export interface SizeProperties {
  size: Size | Size__Headings;
  custom?: string;
}
