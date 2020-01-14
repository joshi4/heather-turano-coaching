import {
  FontProperties,
  SpaceProperties,
  ColorProperties
} from "@heather-turano-coaching/design-system/types/composite";
import { css } from "styled-components";
import {
  makeColor,
  makeSpace
} from "@heather-turano-coaching/design-system/utils";
import { ResponsiveBreakpoints } from "@heather-turano-coaching/design-system/configs";

export const sharedFontSize: FontProperties["fontSize"] = "sm";
export const sharedElementSpacing: SpaceProperties = 16;

export const spaceFromSides: Partial<ResponsiveBreakpoints> = {
  phone: 24,
  tabletPortrait: 60
};

export const sharedHorizontalPadding: Partial<ResponsiveBreakpoints> = {
  phone: 24,
  tabletPortrait: 24
};

export const sharedVerticalPadding: Partial<ResponsiveBreakpoints> = {
  phone: 24,
  tabletPortrait: 12
};

export const createImageBorder = (color: ColorProperties) => css`
  outline: 1px solid ${makeColor(color)};
  outline-offset: -${makeSpace(20)};
`;