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
  to: string;
  route?: string;
}

const StyledTag = styled.div`
  display: inline-block;
  ${makeInset({ horizontal: 12 })}
  background: ${makeColor({ scalable: { color: "secondary", scale: 3 } })};
  border: 1px solid ${makeColor({ scalable: { color: "secondary" } })};
  border-radius: ${makeSpace({ custom: 2 })};
  text-transform: uppercase;
`;

export const Tag: FC<TagProps> = ({ to, route }) => {
  const Tag = (
    <StyledTag>
      <Copy
        type="label"
        fontSize="xs"
        fontColor={{ scalable: { color: "gray" } }}
        lineHeight="md"
      >
        {to}
      </Copy>
    </StyledTag>
  );
  if (route) {
    return <Link to={`/tags/${kebabCase(route)}/`}>{Tag}</Link>;
  }
  return Tag;
};
