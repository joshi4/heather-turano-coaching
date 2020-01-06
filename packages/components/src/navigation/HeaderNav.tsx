import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Copy } from "../typography";
import { makeFlex } from "src/utils/makeFlex";
import {
  makeColor,
  makeResponsive,
  makeInset,
  makeSize
} from "@heather-turano-coaching/design-system/utils";

interface MainNavItem {
  label: string;
  route: string;
}

interface MainNavProps {
  route: string;
  navItems: MainNavItem[];
}

const StyledMainNav = styled.header`
  ${makeFlex("row", "space-between", "center")};
`;

const StyledLogo = styled.div`
  display: block;
  box-sizing: content-box;
  height: 130px;
  background: url("../../../img/logo-stacked.png") center no-repeat;
  background-size: auto 100px;

  width: 100%;
  box-shadow: ${`0 1px 15px 0 rgba(${makeColor({
    scalable: { color: "gray", scale: 3 }
  })}, 0.3)`};
  z-index: 100;
  width: 100%;
  padding-top: 40px;

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      ${makeSize({ custom: 52 })};
      ${makeInset({ horizontal: 20 })}
      ${makeFlex("row", "space-between", "center")};
      background: url("../../../img/logo-inline.png") left no-repeat;
      background-size: auto ${makeSize({ custom: 52 })};
      width: 30%;
    `
  })};
`;

const StyledNavList = styled.ul``;

const StyledNavListItem = styled.li`
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

    span {
      transition: color 0.15s ease-in-out;
    }

    &.active {
      span {
        transition: color 0.15s ease-in-out;
        color: ${makeColor({ scalable: { color: "primary" } })};
      }
    }
  }
`;

export const MainNav: FC<MainNavProps> = ({ route, navItems }) => (
  <StyledMainNav>
    <Link to={route} styleName="logo">
      <StyledLogo />
    </Link>
    <nav>
      <StyledNavList styleName="nav">
        {navItems.map(({ label, route }) => (
          <StyledNavListItem key={label} styleName="StyledNavListItemnk">
            <Link to={`${route}`} activeClassName="active">
              <Copy
                type="paragraph"
                fontSize="md"
                fontColor={{ scalable: { color: "gray", scale: 3 } }}
              >
                {label}
              </Copy>
            </Link>
          </StyledNavListItem>
        ))}
      </StyledNavList>
    </nav>
  </StyledMainNav>
);
