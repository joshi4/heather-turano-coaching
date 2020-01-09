import React, { FC } from "react";
import styled from "styled-components";
import {
  makeOutset,
  makeColor,
  makeInset
} from "@heather-turano-coaching/design-system/utils";

const StyledVerticalRythem = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.3;
  }
  h1 {
    ${makeOutset({ vertical: 36 })};
  }

  h2 {
    ${makeOutset({ vertical: 32 })};
    /* ${makeInset({ bottom: 16 })};
    border-bottom: 1px solid ${makeColor({ fixed: "dark" })}; */
  }

  h3 {
    ${makeOutset({ vertical: 24 })};
  }

  h4 {
    ${makeOutset({ vertical: 20 })};
  }

  h5 {
    ${makeOutset({ vertical: 16 })};
  }

  p {
    ${makeOutset({ vertical: 16 })};
  }

  div.image {
    ${makeOutset({ vertical: 32 })};
  }
`;

export const VertialRhythm: FC = ({ children }) => (
  <StyledVerticalRythem>{children}</StyledVerticalRythem>
);
