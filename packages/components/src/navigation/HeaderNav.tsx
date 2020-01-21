import React, { FC, ReactNode, useRef } from "react";
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

import { useBreakpoints, useSticky } from "../hooks";
import { sharedHorizontalPadding, sharedVerticalPadding } from "../shared";

interface HeaderNavProps {
  homeRoute?: string;
  navItems: ReactNode;
  logos: {
    stacked: string;
    inline: string;
  };
}

export const headerNavHeight = 68;
export const headerNavVerticalPadding = sharedVerticalPadding.tabletPortrait as number;
export const headerNavHorizontalPadding = sharedHorizontalPadding.tabletPortrait as number;

const StyledHeaderNav = styled.header`
  * {
    box-sizing: border-box;
  }

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      height: ${makeSize({ custom: headerNavHeight })};
    `
  })};
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

const StyledNav = styled.nav<{ isSticky: boolean }>`
  width: 100%;
  ${makeFlex("row", "space-between", "center")};
  ${makeInset({
    vertical: sharedVerticalPadding.tabletPortrait,
    horizontal: sharedHorizontalPadding.tabletPortrait
  })};
  background: ${makeColor({ fixed: "light" })};
  box-shadow: ${`0 1px 15px 0 ${makeColor({
    scalable: { color: "gray", scale: 3 }
  })}`};
  width: 100%;
  z-index: 100;

  ${({ isSticky }) =>
    isSticky &&
    css`
      position: fixed;
      top: 0;

      &::after {
        content: "";
        position: relative;
        height: 100%;
      }
    `}
`;

const StyledNavList = styled.ul`
  ${makeReset("list")};
  ${makeFlex("row", "space-around", "center")};
  height: ${makeSize("lg")};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      ${makeFlex("row", "flex-end", "center")};
      flex: 1;
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

type HeaderLogoProps = Omit<HeaderNavProps, "navItems">;

const HeaderLogo: FC<HeaderLogoProps> = ({
  homeRoute,
  logos: { stacked, inline }
}) => {
  const [windowWidth, { tabletPortrait }] = useBreakpoints();

  console.log(windowWidth, tabletPortrait);

  return (
    <StyledLogo>
      <a href={homeRoute}>
        <Image
          src={windowWidth < tabletPortrait ? stacked : inline}
          alt="htcLogo"
          manualWidth={windowWidth < tabletPortrait ? 136 : 200}
        />
      </a>
    </StyledLogo>
  );
};

export const HeaderNav: FC<HeaderNavProps> = ({ navItems, ...restProps }) => {
  const headerRef = useRef<HTMLElement>(null);
  const isSticky = useSticky<HTMLElement>({ ref: headerRef });

  console.log(isSticky);

  return (
    <StyledHeaderNav ref={headerRef}>
      <StyledNav isSticky={isSticky}>
        <HeaderLogo {...restProps} />
        <StyledNavList>{navItems}</StyledNavList>
      </StyledNav>
    </StyledHeaderNav>
  );
};
