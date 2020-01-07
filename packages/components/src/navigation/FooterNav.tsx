import React, { FC } from "react";
import styled from "styled-components";
// import { Field } from "formik";

import {
  makeColor,
  makeResponsive,
  makeInset,
  makeOutset,
  makeReset
} from "@heather-turano-coaching/design-system/utils";

import { InputGroup, Input } from "../forms";
import { Button, Link } from "../buttons-links";
import { Copy } from "../typography";
import { MainNavItem } from "./HeaderNav";
import {
  ColorProperties,
  FontProperties
} from "@heather-turano-coaching/design-system/types/composite";
import { useBreakpoints } from "../hooks";
import { darken } from "polished";
import { makeFlex } from "../utils";

interface FooterProps {
  navItems: MainNavItem[];
  LinkComponent?: FC;
}

const fontColor: ColorProperties = {
  fixed: "light"
};

const StyledFooter = styled.footer`
  width: 100%;

  & > * {
    box-sizing: border-box;
  }
`;

const StyledFooterBottom = styled.div`
  background: ${darken(0.1, makeColor({ scalable: { color: "secondary" } }))};
  width: inherit;
  text-align: center;
  ${makeInset({
    horizontal: 32,
    vertical: 32
  })};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      text-align: left;
      ${makeInset({
        horizontal: 40,
        vertical: 40
      })};

      & > div {
        ${makeFlex("row", "space-between", "flex-end")};
        flex-wrap: wrap;
      }
    `
  })}
`;

const StyledFooterInfo = styled.div`
  ${makeOutset({ bottom: 20 })};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      ${makeFlex("row", "flex-start", "center")};
      ${makeOutset({ bottom: 12 })};

      & > * {
        &:not(:first-child) {
          &:before {
            content: ", ";
          }
        }
      }
    `
  })};
`;

const StyledFooterCreatedBy = styled.div`
  display: none;

  & a {
    color: ${makeColor({ fixed: "light" })};
  }
  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: makeFlex("row", "flex-start", "center")
  })}
`;

const StyledFooterPrivacy = styled.div`
  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: makeFlex("row", "flex-end", "center")
  })}

  & > p {
    ${makeResponsive({
      endAt: "tabletPortrait",
      style: `
        display: none;
      `
    })}
  }

  & > a {
    display: block;
    ${makeOutset({ vertical: 8 })}

    ${makeResponsive({
      beginAt: "tabletPortrait",
      style: `
        ${makeOutset({ horizontal: 8 })}
      `
    })}
  }
`;

const StyledFooterTop = styled.div`
  display: none;
  background: ${makeColor({ scalable: { color: "secondary" } })};
  padding: 40px;

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      ${makeFlex("row", "space-between", "flex-start")};
    `
  })};
`;

const StyledFooterTopBlock = styled.div`
  text-align: center;

  & > p {
    ${makeOutset({ bottom: 24 })}
    font-weight: 700;
    text-transform: uppercase;
  }
  ul {
    ${makeReset("list")};

    & > li {
      ${makeOutset({ bottom: 12 })}
    }
  }
`;

const StyleFooterMainNavLinks = styled.ul`
  ${makeReset("list")};
`;

// const StyledFooterMail = styled.div`
//   max-width: ${makeSize({ custom: 480 })};
//   width: ${makeSize({ custom: 480 })};
// `;

export const FooterNav: FC<FooterProps> = ({
  navItems,
  LinkComponent = undefined
}) => {
  const [window, { tabletPortrait }] = useBreakpoints();

  const fontSize: FontProperties["fontSize"] =
    window < tabletPortrait ? "xs" : "sm";

  return (
    <StyledFooter>
      <StyledFooterTop>
        <StyledFooterTopBlock>
          <Copy type="label" fontSize={fontSize} fontColor={fontColor}>
            Explore
          </Copy>
          <StyleFooterMainNavLinks>
            {navItems.map(({ label, route }) => (
              <li key={label}>
                <Link
                  LinkComponent={LinkComponent}
                  to={route || label.split(" ").join("-")}
                >
                  <Copy
                    type="paragraph"
                    fontSize={fontSize}
                    fontColor={fontColor}
                  >
                    {label}
                  </Copy>
                </Link>
              </li>
            ))}
          </StyleFooterMainNavLinks>
        </StyledFooterTopBlock>
        <StyledFooterTopBlock>
          <Copy type="label" fontSize={fontSize} fontColor={fontColor}>
            Subscribe
          </Copy>
          <InputGroup layout="inline">
            <Input
              type="text"
              name="email"
              placeholder="youremailaddress@awesome.com"
            />
            <Button styleType="primary" label="Join!" type="submit" />
          </InputGroup>
        </StyledFooterTopBlock>
        <StyledFooterTopBlock>
          <Copy type="label" fontSize={fontSize} fontColor={fontColor}>
            Social
          </Copy>
          <StyleFooterMainNavLinks>
            {navItems.map(({ label, route }) => (
              <li key={label}>
                <Link
                  LinkComponent={LinkComponent}
                  to={route || label.split(" ").join("-")}
                >
                  <Copy
                    type="paragraph"
                    fontSize={fontSize}
                    fontColor={fontColor}
                  >
                    {label}
                  </Copy>
                </Link>
              </li>
            ))}
          </StyleFooterMainNavLinks>
        </StyledFooterTopBlock>
      </StyledFooterTop>
      <StyledFooterBottom>
        <StyledFooterInfo>
          <Copy type="paragraph" fontSize={fontSize} fontColor={fontColor}>
            Copyright &copy; 2018, Heather Turano Coaching, LLC, All Rights
            Reserved
          </Copy>
        </StyledFooterInfo>
        <div>
          <StyledFooterCreatedBy>
            <Copy type="text" fontSize={fontSize} fontColor={fontColor}>
              Designed and developed by
            </Copy>
            <span>&nbsp;</span>
            <Copy type="text" fontSize={fontSize} fontColor={fontColor}>
              <a
                href="http://www.imaginedelements.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Imagined Elements, LLC
              </a>
            </Copy>
          </StyledFooterCreatedBy>
          <StyledFooterPrivacy>
            <Link LinkComponent={LinkComponent} to="/privacy-policy">
              <Copy type="text" fontSize={fontSize} fontColor={fontColor}>
                Privary Policy
              </Copy>
            </Link>
            <Copy type="text" fontSize={fontSize} fontColor={fontColor}>
              &nbsp;|&nbsp;
            </Copy>
            <Link LinkComponent={LinkComponent} to="/terms-of-service">
              <Copy type="text" fontSize={fontSize} fontColor={fontColor}>
                Terms of Service
              </Copy>
            </Link>
            <Copy type="text" fontSize={fontSize} fontColor={fontColor}>
              &nbsp;|&nbsp;
            </Copy>
            <Link LinkComponent={LinkComponent} to="/cookie-policy">
              <Copy type="text" fontSize={fontSize} fontColor={fontColor}>
                Cookie Policy
              </Copy>
            </Link>
          </StyledFooterPrivacy>
        </div>
      </StyledFooterBottom>
    </StyledFooter>
  );
};
