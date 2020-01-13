import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

import { Copy } from "../typography";
import { Image } from "../assets";
import { makeFlex } from "../utils/makeFlex";
import {
  makeColor,
  makeResponsive,
  makeInset,
  makeSize,
  makeReset
} from "@heather-turano-coaching/design-system/utils";

import { useBreakpoints } from "../hooks";
import { sharedHorizontalPadding, sharedVerticalPadding } from "../shared";
import { rgba } from "polished";
import { HTMLLink } from "@heather-turano-coaching/design-system/types/composite";

export interface MainNavItem {
  label: string;
  route: string;
  anchorLink?: boolean;
  forceActiveState?: boolean;
}

export type MainNavLinkProps = Pick<MainNavItem, "route"> & {
  activeClassName?: string;
  linkContent: ReactNode;
};

interface HeaderNavProps {
  homeRoute?: string;
  navItems: MainNavItem[];
  logos: {
    stacked: string;
    inline: string;
  };
  LinkComponent?: FC<MainNavLinkProps>;
}

const StyledHeaderNav = styled.header`
  box-sizing: border-box;
  /* box-shadow: ${`0 1px 15px 0 ${rgba(
    makeColor({
      scalable: { color: "gray", scale: 3 }
    }),
    0.3
  )}`}; */
  box-shadow: ${`0 1px 15px 0 ${makeColor({
    scalable: { color: "gray", scale: 3 }
  })}`};
  width: 100%;
  ${makeInset({
    bottom: sharedVerticalPadding.tabletPortrait
  })}

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      ${makeFlex("row", "space-between", "center")};
      ${makeInset({
        horizontal: sharedHorizontalPadding.tabletPortrait,
        vertical: sharedVerticalPadding.tabletPortrait
      })}
    `
  })};

  & > nav {
    flex: 1;
  }
`;

const StyledLogo = styled.div`
  ${makeFlex("row", "center", "center")};
  height: ${makeSize({ custom: 160 })};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      ${makeFlex("row", "space-between", "center")};
      height: initial;
    `
  })};

  & > a {
    ${makeFlex("row", "center", "center")};
    display: block;
    height: 100%;
    width: 100%;

    & > div {
      height: inherit;
    }
  }
`;

const StyledNavList = styled.ul`
  ${makeReset("list")};
  ${makeFlex("row", "space-around", "center")};
  height: ${makeSize("lg")};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      ${makeFlex("row", "flex-end", "center")};
    `
  })};
`;

const CSSNavItemActive = css`
  p {
    color: ${makeColor({ scalable: { color: "primary" } })};
  }

  &::after {
    background: ${makeColor({ scalable: { color: "primary" } })};
  }
`;

const StyledNavListItem = styled.li<
  Required<Pick<MainNavItem, "forceActiveState">>
>`
  align-self: stretch;

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      &:not(:last-child) {
        ${makeInset({ right: 32 })};
      }
    `
  })};

  & > a {
    display: block;
    text-transform: uppercase;
    text-decoration: none;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      display: block;
      bottom: 0;
      left: 0;
      right: 0;
      height: ${makeSize({ custom: 1 })};
      background: transparent;
    }

    & > p,
    &::after {
      transition: all 0.15s ease-in-out;
    }

    &:hover,
    &.active {
      ${CSSNavItemActive};
    }

    ${({ forceActiveState }) => forceActiveState && CSSNavItemActive};
  }
`;

const DefaultLinkComponent: FC<MainNavLinkProps & HTMLLink> = ({
  route,
  linkContent
}) => <a href={route}>{linkContent}</a>;

export const HeaderNav: FC<HeaderNavProps> = ({
  homeRoute = "/",
  navItems,
  LinkComponent,
  logos: { stacked, inline }
}) => {
  const [windowWidth, { tabletPortrait }] = useBreakpoints();

  const LC = LinkComponent || DefaultLinkComponent;

  return (
    <StyledHeaderNav>
      <StyledLogo>
        <LC
          route={homeRoute}
          linkContent={
            <Image
              src={windowWidth < tabletPortrait ? stacked : inline}
              alt="htcLogo"
              manualWidth={windowWidth < tabletPortrait ? 136 : 200}
            />
          }
        />
      </StyledLogo>
      <nav>
        <StyledNavList styleName="nav">
          {navItems.map(
            ({ label, route, anchorLink, forceActiveState = false }) => {
              const ILC = anchorLink ? DefaultLinkComponent : LC;
              return (
                <StyledNavListItem
                  key={label}
                  forceActiveState={forceActiveState}
                >
                  <ILC
                    route={`${route}`}
                    activeClassName="active"
                    linkContent={
                      <Copy
                        type="label"
                        fontSize={windowWidth < tabletPortrait ? "xs" : "sm"}
                        lineHeight="lg"
                        fontColor={{ scalable: { color: "gray", scale: 0 } }}
                      >
                        {label}
                      </Copy>
                    }
                  />
                </StyledNavListItem>
              );
            }
          )}
        </StyledNavList>
      </nav>
    </StyledHeaderNav>
  );
};
