import { Space } from "primitives";
type SpaceTypes = "dynamic" | "custom";

type MakeSpace = (types: SpaceTypes, space: Space | undefined) => string;

export const makeSpace: MakeSpace = (type = "dynamic", space = undefined) => {
  if (space && type === "dynamic") {
    return space;
  }
  if (space && type === "custom") {
    console.warn(
      "You're using a space that is defined outside of the parameters of the design system. Use with caution."
    );
  }
  return "0";
};

export interface CSSPositionOffsets {
  top: Space;
  right: Space;
  bottom: Space;
  left: Space;
}
