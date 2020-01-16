import React, { FC } from "react";
import styled from "styled-components";
import {
  makeColor,
  makeSpace,
  makeInset
} from "@heather-turano-coaching/design-system/utils";

import { Copy } from "../typography";

export interface TagProps {
  text: string;
}

export const StyledTag = styled.div`
  display: inline-block;
  ${makeInset({ horizontal: 12 })};
  background: ${makeColor({ scalable: { color: "secondary", scale: 3 } })};
  border-radius: ${makeSpace({ custom: 2 })};
  text-transform: uppercase;
`;

export const Tag: FC<TagProps> = ({ text }) => (
  <StyledTag>
    <Copy
      type="text"
      fontSize="xxs"
      // fontColor={{ scalable: { color: "gray" } }}
      // fontColor={{ fixed: "light" }}
      fontColor={{ fixed: "dark" }}
      lineHeight="sm"
    >
      {text}
    </Copy>
  </StyledTag>
);
