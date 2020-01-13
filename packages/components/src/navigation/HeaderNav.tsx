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

interface HeaderNavProps {
  homeRoute?: string;
  navItems: ReactNode;
  logos: {
    stacked: string;
    inline: string;
  };
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

const StyledNavListItem = styled.li<{ forceActiveState: boolean }>`
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

export const HeaderNavLink = StyledNavListItem;

export const HeaderNavLinkContent: FC = ({ children }) => {
  const [windowWidth, { tabletPortrait }] = useBreakpoints();
  return (
    <Copy
      type="label"
      fontSize={windowWidth < tabletPortrait ? "xs" : "sm"}
      lineHeight="lg"
      fontColor={{ scalable: { color: "gray", scale: 0 } }}
    >
      {children}
    </Copy>
  );
};

export const HeaderNav: FC<HeaderNavProps> = ({
  homeRoute = "/",
  navItems,
  logos: { stacked, inline }
}) => {
  const [windowWidth, { tabletPortrait }] = useBreakpoints();

  return (
    <StyledHeaderNav>
      <StyledLogo>
        <a href={homeRoute}>
          <Image
            src={windowWidth < tabletPortrait ? stacked : inline}
            alt="htcLogo"
            manualWidth={windowWidth < tabletPortrait ? 136 : 200}
          />
        </a>
      </StyledLogo>
      <nav>
        <StyledNavList styleName="nav">{navItems}</StyledNavList>
      </nav>
    </StyledHeaderNav>
  );
};
