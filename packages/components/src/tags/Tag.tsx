import React, { FC } from "react";
import styled, { css, SimpleInterpolation } from "styled-components";
import {
  makeColor,
  makeSpace,
  makeInset,
  makeSize
} from "@heather-turano-coaching/design-system/utils";

import { Copy } from "../typography";

export type TagType = "category" | "tag" | "list";

export interface TagProps {
  text: string;
  tagType?: TagType;
}

const CSSTag: { [key in TagType]: SimpleInterpolation } = {
  category: css`
    ${makeInset({ horizontal: 12 })};
    background: ${makeColor({
      scalable: { color: "secondary", scale: 3 }
    })};
  `,
  tag: css`
    ${makeInset({ horizontal: 12 })};
    background: ${makeColor({
      scalable: { color: "primary", scale: 3 }
    })};
  `,
  list: css`
    ${makeInset({ horizontal: 16 })};
    background: ${makeColor({ fixed: "bright-green" })};
    border: ${makeSize({ custom: 1 })} solid
      ${makeColor({
        scalable: { color: "secondary" }
      })};
  `
};

export const StyledTag = styled.div<Required<Pick<TagProps, "tagType">>>`
  display: inline-block;
  border-radius: ${makeSpace({ custom: 2 })};
  text-transform: uppercase;

  ${({ tagType }) => CSSTag[tagType]};
`;

export const Tag: FC<TagProps> = ({ tagType = "tag", text }) => (
  <StyledTag tagType={tagType}>
    <Copy
      type="label"
      fontSize="xs"
      fontColor={{ fixed: "dark" }}
      lineHeight="md"
    >
      {text}
    </Copy>
  </StyledTag>
);
