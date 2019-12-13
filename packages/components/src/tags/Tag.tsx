import React, { FC } from "react";
import { kebabCase } from "lodash";
import { Link as GatsbyLink } from "gatsby";

import { Copy } from "../typography";

import "./index.module.scss";

export interface TagProps {
  value: string;
}

export const Tag: FC<TagProps> = ({ value }) => (
  <GatsbyLink styleName="blog-tag" to={`/tags/${kebabCase(value)}/`}>
    <Copy type="caption" size="sm" color="lightscale-3">
      {value}
    </Copy>
  </GatsbyLink>
);
