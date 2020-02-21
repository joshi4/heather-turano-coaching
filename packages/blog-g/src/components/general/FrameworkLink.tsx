import React, { FC } from "react";
import { Link, GatsbyLinkProps } from "gatsby";

export const FrameworkLink: FC<GatsbyLinkProps<{}>> = ({
  children,
  ref,
  ...restProps
}) => (
  <Link
    {...restProps}
    style={{ textDecoration: "none", display: "inline-block" }}
  >
    {children}
  </Link>
);
