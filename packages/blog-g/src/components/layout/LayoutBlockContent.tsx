import React, { FC } from "react";
import styled from "styled-components";
import { makeOutset } from "@heather-turano-coaching/design-system/utils";

const StyledLayoutBlockContent = styled.div`
  width: 100%;
`;

export const LayoutBlockContent: FC = ({ children }) => (
  <StyledLayoutBlockContent>{children}</StyledLayoutBlockContent>
);
