import React, { FC } from "react";
import styled from "styled-components";
import { makeSize } from "@heather-turano-coaching/design-system/utils";
import { makeFlex } from "@heather-turano-coaching/components";

export const gutter = 40;

const StyledLayoutContainer = styled.section`
  max-width: ${makeSize({ custom: 1024 })};
  ${makeFlex("row", "flex-start", "flex-start")};
  margin: 0 auto;
`;

export const LayoutContainer: FC = ({ children }) => (
  <StyledLayoutContainer>{children}</StyledLayoutContainer>
);
