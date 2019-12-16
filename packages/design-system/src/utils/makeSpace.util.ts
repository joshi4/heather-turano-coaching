export const makeSpace = () => "16px";

interface CSSPositionOffsets {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

type InsetCategories = "dynamic" | "custom";

interface MakeInsetParams {
  type: InsetCategories;
  sizes?: CSSPositionOffsets;
}

type MakeInset = (params: MakeInsetParams) => string;

export const makeInset: MakeInset = ({
  type = "dynamic",
  sizes: { top = 0, right = 0, bottom = 0, left = 0 } = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}) => {
  if (type !== "custom") {
    return `padding: ${top} ${right} ${bottom} ${left}`;
  }
  console.warn(
    "You're using a size that is defined outside of the parameters of the design system. Boy I do hope you know what you're doing..."
  );
  return `padding: ${top} ${right} ${bottom} ${left}`;
};
