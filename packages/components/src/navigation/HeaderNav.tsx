import React, { FC } from "react";
import styled from "styled-components";
import Link from "gatsby-link";

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

const logo = {
  stacked: require("../../.storybook/assets/htc-logo-stacked.svg").default,
  inline: require("../../.storybook/assets/htc-logo-inline.svg").default
};

export interface HeaderNavItem {
  label: string;
  route: string;
}

interface HeaderNavProps {
  homeRoute?: string;
  navItems: HeaderNavItem[];
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

const StyledNavListItem = styled.li`
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

    & > p {
      transition: color 0.15s ease-in-out;
    }

    &.active {
      p {
        color: ${makeColor({ scalable: { color: "primary" } })};
      }
    }
  }
`;

export const HeaderNav: FC<HeaderNavProps> = ({
  homeRoute = "/",
  navItems
}) => {
  const [windowWidth, { tabletPortrait }] = useBreakpoints();

  return (
    <StyledHeaderNav>
      <StyledLogo>
        <Link to={homeRoute}>
          <Image
            src={windowWidth < tabletPortrait ? logo.stacked : logo.inline}
            alt="htcLogo"
            manualWidth={windowWidth < tabletPortrait ? 136 : 200}
          />
        </Link>
      </StyledLogo>
      <nav>
        <StyledNavList styleName="nav">
          {navItems.map(({ label, route }) => (
            <StyledNavListItem key={label}>
              <Link to={`${route}`} activeClassName="active">
                <Copy
                  type="label"
                  fontSize="xs"
                  lineHeight="lg"
                  fontColor={{ scalable: { color: "gray", scale: 0 } }}
                >
                  {label}
                </Copy>
              </Link>
            </StyledNavListItem>
          ))}
        </StyledNavList>
      </nav>
    </StyledHeaderNav>
  );
};
