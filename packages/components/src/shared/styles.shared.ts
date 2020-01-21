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

export const shareButtonAndInputFontSize: FontProperties["fontSize"] = "sm";
export const sharedElementSpacing: SpaceProperties = 16;
export const sharedButtonAndInputVerticalPadding: number = 12;

export const sharedHorizontalBodyPadding: ResponsiveBreakpoints = {
  phone: 24,
  phoneMd: 24,
  phoneLg: 24,
  tabletPortrait: 32,
  tabletLandscape: 32,
  laptop: 32,
  desktop: 32,
  "4K": 32
};

export const createImageBorder = (color: ColorProperties) => css`
  outline: 1px solid ${makeColor(color)};
  outline-offset: -${makeSpace(20)};
`;
