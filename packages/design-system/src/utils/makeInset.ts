import { InsetOutsetProperties, SpaceProperties } from "../types/composite";
import { makeSpace } from "./makeSpace";

const reconcileValues = (
  specificPosition?: SpaceProperties,
  generalPosition?: SpaceProperties
): string => {
  if (specificPosition) {
    return makeSpace(specificPosition);
  }
  if (!specificPosition && generalPosition) {
    return makeSpace(generalPosition);
  }
  return "0";
};

type MakeInset = (
  position: Partial<InsetOutsetProperties>
) => { padding: string };

export const makeInset: MakeInset = ({
  top,
  bottom,
  left,
  right,
  vertical,
  horizontal
}) => {
  // PRESERVE THIS ORDER
  const paddingObj = {
    top: reconcileValues(top, vertical),
    right: reconcileValues(right, horizontal),
    bottom: reconcileValues(bottom, vertical),
    left: reconcileValues(left, horizontal)
  };

  //
  /**
   * Need to transform the properties into a string
   * to be sure that we get a proper style object
   * for any css-in-js solution
   */
  return {
    padding: Object.values(paddingObj).reduce<string>((accum, value) => {
      const stringifiedAttribute = `${value}`;
      if (accum === "") {
        return stringifiedAttribute;
      }
      return `${accum} ${stringifiedAttribute}`;
    }, "")
  };
};
