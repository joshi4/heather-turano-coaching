import * as Primitive from "../types/primitive";

export type FontTypes = "heading" | "copy";

export type HeadingSizes = "h1" | "h2" | "h3" | "h4" | "h5";

export const headingSizeMap: { [key in HeadingSizes]: Primitive.Size } = {
  h1: "xxl",
  h2: "xl",
  h3: "lg",
  h4: "md",
  h5: "sm"
};
