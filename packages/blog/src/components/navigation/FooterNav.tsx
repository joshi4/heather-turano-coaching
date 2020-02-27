import React, { FC } from "react";
import styled from "styled-components";
import { darken } from "polished";
import { ColorProperties } from "@heather-turano-coaching/design-system/types/composite";
import {
  makeColor,
  makeResponsive,
  makeInset,
  makeOutset
} from "@heather-turano-coaching/design-system/utils";

import {
  Copy,
  makeFlex,
  sharedHorizontalBodyPadding
} from "@heather-turano-coaching/components";

import { FormSubscribe } from "../../features";
import { NavLinkType } from "../layout";
import { FooterNavLinkList } from "./FooterNavLinkList";
import { FooterNavSection } from "./FooterNavSection";
import { maxNavWidth } from "./HeaderNav";

interface FooterProps {
  attribution: string;
  createdBy: {
    intro: string;
    link: string;
    name: string;
  };
  mainMenu: NavLinkType[];
  usefulLinks: NavLinkType[];
}

export const fontColor: ColorProperties = {
  fixed: "light"
};

const StyledFooterContainer = styled.footer`
  width: 100%;
  background: ${darken(0.1, makeColor({ scalable: { color: "secondary" } }))};
  ${makeInset({
    vertical: 40,
    horizontal: sharedHorizontalBodyPadding.tabletPortrait
  })};
`;

const StyledFooter = styled.div`
  ${makeFlex("column-reverse", "flex-start", "flex-start")};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
    ${makeFlex("row", "flex-start", "flex-start")};
      padding-bottom: 0;
      max-width: ${maxNavWidth};
      margin: 0 auto;

      & > * {
        &:not(:last-child) {
          ${makeOutset({ right: 20 })};
        }
        &:not(:first-child) {
          ${makeOutset({ left: 20 })};
        }
        &:first-child {
          flex: 2;
        }
        &:last-child {
          flex: 2;
        }
      }
    `
  })};
`;

export const FooterNav: FC<FooterProps> = ({
  attribution,
  usefulLinks,
  mainMenu,
  createdBy
}) => (
  <StyledFooterContainer>
    <StyledFooter>
      <FooterNavSection title="Heather Turano Coaching, LLC">
        <Copy type="paragraph" fontSize="xs" fontColor={fontColor}>
          {attribution}
        </Copy>
        <br />
        <Copy type="paragraph" fontSize="xs" fontColor={fontColor}>
          {createdBy.intro}{" "}
          <a
            href={createdBy.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inlineBlock",
              textDecorationColor: `${makeColor(fontColor)}`,
              color: `${makeColor(fontColor)}`
            }}
          >
            {createdBy.name}
          </a>
        </Copy>
      </FooterNavSection>
      <FooterNavSection title="main menu">
        <FooterNavLinkList list={mainMenu} />
      </FooterNavSection>
      <FooterNavSection title="useful links">
        <FooterNavLinkList list={usefulLinks} />
      </FooterNavSection>
      <FooterNavSection title="Subscribe">
        <FormSubscribe fieldPrefix="footer" />
      </FooterNavSection>
    </StyledFooter>
  </StyledFooterContainer>
);
