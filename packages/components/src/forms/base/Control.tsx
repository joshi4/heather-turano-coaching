import React, { FC } from "react";
import styled from "styled-components";

const StyledControl = styled.div`
  display: block;
`;

export const Control: FC = ({ children }) => (
  <StyledControl>{children}</StyledControl>
);
