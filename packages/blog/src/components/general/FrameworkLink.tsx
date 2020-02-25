import React, { FC } from "react";
import { Link, GatsbyLinkProps } from "gatsby";

export const FrameworkLink: FC<GatsbyLinkProps<{}>> = ({
  children,
  ref,
  to,
  ...restProps
}) => (
  <Link
    {...restProps}
    to={`${to}/`}
    style={{ textDecoration: "none", display: "inline-block" }}
  >
    {children}
  </Link>
);
