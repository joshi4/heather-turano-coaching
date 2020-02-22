import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { darken } from "polished";
import {
  ColorProperties,
  FontProperties
} from "@heather-turano-coaching/design-system/types/composite";
import {
  makeColor,
  makeResponsive,
  makeInset,
  makeOutset,
  makeReset
} from "@heather-turano-coaching/design-system/utils";

import {
  InputGroup,
  Input,
  Button,
  Copy,
  CopyProps,
  makeFlex
} from "@heather-turano-coaching/components";

import { useBreakpoints } from "@heather-turano-coaching/hooks";

interface NavBlock {
  title: string;
  items: ReactNode;
}

interface FooterProps {
  leftNav: NavBlock;
  rightNav: NavBlock;
  terms: ReactNode;
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
`;

const StyledTopBlogContent = styled.ul`
  ${makeReset("list")};

  & > li {
    ${makeOutset({ bottom: 12 })}
  }
`;

const StyledFooterLinks = styled.li`
  a ${makeReset("list")} a {
    ${makeReset("anchor")}
  }
`;

// @ts-ignore
export const FooterNavLink = StyledFooterLinks;

// const StyledFooterMail = styled.div`
//   max-width: ${makeSize({ custom: 480 })};
//   width: ${makeSize({ custom: 480 })};
// `;

const useFooterNavFontSize = (): FontProperties["fontSize"] => {
  const [window, { tabletPortrait }] = useBreakpoints();

  const fontSize: FontProperties["fontSize"] =
    window < tabletPortrait ? "xs" : "sm";

  return fontSize;
};

export const FooterNavLinkContent: FC<{ type?: CopyProps["type"] }> = ({
  type = "paragraph",
  children
}) => {
  const fontSize = useFooterNavFontSize();

  return (
    <Copy type={type} fontSize={fontSize} fontColor={fontColor}>
      {children}
    </Copy>
  );
};

export const FooterNav: FC<FooterProps> = ({
  leftNav: { title: leftNavTitle = "Browse", items: leftNavItems },
  rightNav: { title: rightNavTitle = "Explore", items: rightNavItems },
  terms
}) => {
  const fontSize = useFooterNavFontSize();

  return (
    <StyledFooter>
      <StyledFooterTop>
        <StyledFooterTopBlock>
          <Copy type="label" fontSize={fontSize} fontColor={fontColor}>
            {leftNavTitle}
          </Copy>
          <StyledTopBlogContent>{leftNavItems}</StyledTopBlogContent>
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
            {rightNavTitle}
          </Copy>
          <StyledTopBlogContent>{rightNavItems}</StyledTopBlogContent>
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
          <StyledFooterPrivacy>{terms}</StyledFooterPrivacy>
        </div>
      </StyledFooterBottom>
    </StyledFooter>
  );
};
