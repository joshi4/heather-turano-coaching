import React, { FC } from "react";
import styled from "styled-components";
import {
  makeSize,
  makeInset
} from "@heather-turano-coaching/design-system/utils";
import { sharedHorizontalBodyPadding } from "@heather-turano-coaching/components";

export const gutter = 40;

interface LayoutContainerProps {
  layoutType?: "stacked" | "inline";
}

const StyledLayoutContainer = styled.section<Required<LayoutContainerProps>>`
  width: 100%;
  max-width: ${makeSize({ custom: 1024 })};
  box-sizing: border-box;

  ${makeInset({
    horizontal: sharedHorizontalBodyPadding.phone,
    vertical: sharedHorizontalBodyPadding.phone
  })};
`;

export const LayoutContainer: FC<LayoutContainerProps> = ({
  layoutType = "inline",
  children
}) => (
  <StyledLayoutContainer layoutType={layoutType}>
    {children}
  </StyledLayoutContainer>
);
