import React, { FC } from "react";
import { kebabCase } from "lodash";
import { Link as GatsbyLink } from "gatsby";

import { Copy } from "../typography";

import "./Tag.module.scss";

export interface TagProps {
  value: string;
}

export const Tag: FC<TagProps> = ({ value }) => (
  <GatsbyLink styleName="blog-tag" to={`/tags/${kebabCase(value)}/`}>
    <Copy
      type="caption"
      fontSize={{ size: "sm" }}
      fontColor={{ scalable: { color: "light" } }}
    >
      {value}
    </Copy>
  </GatsbyLink>
);
