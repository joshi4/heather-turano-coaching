import React, { FC } from "react";
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";

import "./Link.module.scss";

export const Link: FC<Omit<GatsbyLinkProps<{}>, "ref">> = ({
  children,
  ...restProps
}) => (
  <div styleName="link">
    <GatsbyLink {...restProps}>{children}</GatsbyLink>
  </div>
);
