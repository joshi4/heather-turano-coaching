import React, { FC } from "react";
import styled from "styled-components";
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";

import { makeOutset } from "@heather-turano-coaching/design-system/utils";

const StyledLink = styled.div`
  a {
    & > * {
      &:not(:first-child) {
        ${makeOutset({ left: 12 })};
      }
    }
  }
`;

export const Link: FC<Omit<GatsbyLinkProps<{}>, "ref">> = ({
  children,
  ...restProps
}) => (
  <StyledLink>
    <GatsbyLink {...restProps}>{children}</GatsbyLink>
  </StyledLink>
);
