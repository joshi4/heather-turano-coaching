import { Size } from "@heather-turano-coaching/design-system/types/primitive";

export type CopyTypes = "caption" | "text" | "label" | "paragraph";
export type HeadingSize = "h1" | "h2" | "h3" | "h4" | "h5";

export const headingSizeMap: {
  [key in HeadingSize]: Size;
} = {
  h5: "sm",
  h4: "md",
  h3: "lg",
  h2: "xl",
  h1: "xxl"
};
