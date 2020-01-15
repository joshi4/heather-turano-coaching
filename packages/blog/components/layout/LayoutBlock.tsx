import React, { FC } from "react";
import styled from "styled-components";
import { makeOutset } from "@heather-turano-coaching/design-system/utils";
import { gutter } from "./LayoutContainer";

interface LayoutBlockProps {}

const StyledLayoutBlock = styled.div<LayoutBlockProps>`
  width: 100%;
  ${makeOutset({ vertical: gutter })}
`;

export const LayoutBlock: FC<LayoutBlockProps> = ({ children }) => (
  <StyledLayoutBlock>{children}</StyledLayoutBlock>
);
