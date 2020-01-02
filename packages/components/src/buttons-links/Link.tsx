import React, { FC } from "react";
import styled from "styled-components";
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";

const StyledLink = styled.div`
  a {
    & > * {
      &:not(:first-child) {
        margin-left: 10px;
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
