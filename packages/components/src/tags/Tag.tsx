import React, { FC } from "react";
import { kebabCase } from "lodash";
import Link from "gatsby-link";
import styled from "styled-components";
import {
  makeColor,
  makeSpace,
  makeInset
} from "@heather-turano-coaching/design-system/utils";

import { Copy } from "../typography";

export interface TagProps {
  text: string;
  route?: string;
}

export const StyledTag = styled.div`
  display: inline-block;
  ${makeInset({ horizontal: 12 })}
  background: ${makeColor({ scalable: { color: "light", scale: 2 } })};
  border-radius: ${makeSpace({ custom: 2 })};
  text-transform: uppercase;
`;

export const Tag: FC<TagProps> = ({ text, route }) => {
  const Tag = (
    <StyledTag>
      <Copy
        type="text"
        fontSize="xs"
        fontColor={{ scalable: { color: "gray" } }}
        lineHeight="md"
      >
        {text}
      </Copy>
    </StyledTag>
  );
  if (route) {
    return <Link to={`/tags/${kebabCase(route)}/`}>{Tag}</Link>;
  }
  return Tag;
};
