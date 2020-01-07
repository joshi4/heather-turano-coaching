import React, { FC } from "react";
import styled from "styled-components";
import { GatsbyLinkProps } from "gatsby";

import { makeOutset } from "@heather-turano-coaching/design-system/utils";

const StyledLinkContainer = styled.div`
  a {
    & > * {
      &:not(:first-child) {
        ${makeOutset({ left: 12 })};
      }
    }
  }
`;

const StyledLink = styled.a``;

type LinkProps = Omit<GatsbyLinkProps<{}>, "ref"> & {
  LinkComponent?: FC;
};

export const Link: FC<LinkProps> = ({
  LinkComponent = undefined,
  children,
  ...restProps
}) =>
  LinkComponent ? (
    <StyledLinkContainer>
      <LinkComponent {...restProps}>{children}</LinkComponent>
    </StyledLinkContainer>
  ) : (
    <StyledLink>{children}</StyledLink>
  );
