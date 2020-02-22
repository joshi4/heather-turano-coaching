import React, { FC } from "react";
import Link, { LinkProps } from "next/link";
import styled from "styled-components";
import { makeReset } from "@heather-turano-coaching/design-system/utils";

const StyledNextLink = styled.a`
  ${makeReset("anchor")};
  cursor: pointer;
`;

export const NextLink: FC<LinkProps> = ({ children, ...restProps }) => (
  <Link {...restProps}>
    <StyledNextLink>{children}</StyledNextLink>
  </Link>
);
