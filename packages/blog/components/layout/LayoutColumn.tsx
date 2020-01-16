import React, { FC } from "react";
import styled, { css } from "styled-components";
import {
  makeSize,
  makeOutset
} from "@heather-turano-coaching/design-system/utils";
import { gutter } from "./LayoutContainer";

interface LayoutColumnProps {
  colWidth?: number;
}

const StyledLayoutColumn = styled.div<LayoutColumnProps>`
  z-index: 10;

  ${({ colWidth }) =>
    colWidth
      ? css`
          width: ${makeSize({ custom: colWidth })};
        `
      : css`
          flex: 1;
        `};

  &:not(:first-child) {
    ${makeOutset({ left: gutter })};
  }
`;

export const LayoutColumn: FC<LayoutColumnProps> = ({ children, colWidth }) => (
  <StyledLayoutColumn colWidth={colWidth}>{children}</StyledLayoutColumn>
);
