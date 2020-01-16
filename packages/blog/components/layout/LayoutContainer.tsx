import React, { FC } from "react";
import styled, { css } from "styled-components";
import { makeSize } from "@heather-turano-coaching/design-system/utils";
import { makeFlex } from "@heather-turano-coaching/components";

export const gutter = 40;

interface LayoutContainerProps {
  layoutType?: "stacked" | "inline";
}

const StyledLayoutContainer = styled.section<Required<LayoutContainerProps>>`
  max-width: ${makeSize({ custom: 1024 })};
  margin: 0 auto;

  ${({ layoutType }) =>
    layoutType === "inline"
      ? makeFlex("row", "flex-start", "flex-start")
      : css`
          display: block;
        `};
`;

export const LayoutContainer: FC<LayoutContainerProps> = ({
  layoutType = "inline",
  children
}) => (
  <StyledLayoutContainer layoutType={layoutType}>
    {children}
  </StyledLayoutContainer>
);
