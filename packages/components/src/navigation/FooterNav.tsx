import React, { FC } from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { Field } from "formik";

import {
  makeColor,
  makeResponsive,
  makeInset,
  makeOutset,
  makeSize
} from "@heather-turano-coaching/design-system/utils";

import { InputGroup, Input } from "../forms";
import { Button } from "../buttons-links";
import { Copy } from "../typography";

interface FooterQuickLinks {
  title: string;
  route: string;
}

interface FooterProps {
  quickLinks: FooterQuickLinks[];
}

const StyledFooter = styled.footer`
  width: 100%;
`;

const StyledFooterCredits = styled.div`
  background: ${makeColor({ scalable: { color: "primary", scale: 1 } })};
  ${makeInset({ horizontal: 32, vertical: 32 })};
  width: inherit;
  text-align: center;

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-end;
      background: ${makeColor({ scalable: { color: "primary", scale: 3 } })};
      ${makeInset({ horizontal: 20, vertical: 20 })};

      & > div {
        &:first-child {
          text-align: left;
          flex: 1;
        }
      }
    `
  })}
`;

const StyledFooterInfo = styled.div`
  ${makeOutset({ bottom: 20 })};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
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
    color: ${makeColor({ scalable: { color: "secondary" } })};
  }
  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    `
  })}
`;

const StyledFooterPrivacy = styled.div`
  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      text-align: right;

      & > a {
        color: ${makeColor({ scalable: { color: "secondary" } })};
      }
    `
  })}
`;

const StyledFooterLinks = styled.div`
  display: none;
  background: ${makeColor({ scalable: { color: "primary", scale: 1 } })}1;
  padding: 40px;

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      text-align: right;
    `
  })};

  ${makeResponsive({
    beginAt: "tabletLandscape",
    style: `
      display: none;
    `
  })};

  & > .block {
    min-width: 125px;

    &:not(:first-child) {
      margin-left: 20px;
    }
    header {
      margin-bottom: 10px;
    }
    ul {
      & > li {
        &:not(:last-child) {
          margin-bottom: 10px;
        }

        & > a {
          text-decoration: none;
          text-transform: capitalize;
        }
      }
    }
  }
`;

const StyledFooterMail = styled.div`
  max-width: ${makeSize({ custom: 480 })};
  width: ${makeSize({ custom: 480 })};
`;

export const Footer: FC<FooterProps> = ({ quickLinks }) => (
  <StyledFooter>
    <StyledFooterLinks>
      <div styleName="block">
        <header>
          <Copy
            type="paragraph"
            fontSize="md"
            fontColor={{ scalable: { color: "gray" } }}
          >
            Explore
          </Copy>
        </header>
        <ul>
          {quickLinks.map(({ title, route }) => (
            <li key={title}>
              <GatsbyLink to={route || title.split(" ").join("-")}>
                <Copy
                  type="paragraph"
                  fontSize="md"
                  fontColor={{ fixed: "light" }}
                >
                  {title}
                </Copy>
              </GatsbyLink>
            </li>
          ))}
        </ul>
      </div>
      <div styleName="block">
        <header>
          <Copy
            type="paragraph"
            fontSize="md"
            fontColor={{ scalable: { color: "gray" } }}
          >
            Sign up to become a Honest Heather Insider. Join the community of
            honest, feel-good conversation.
          </Copy>
        </header>
        <StyledFooterMail>
          <InputGroup layout="inline">
            <Field
              component={Input}
              type="text"
              name="firstName"
              placeholder="First name"
            />
            <Field
              component={Input}
              type="text"
              name="email"
              placeholder="youremailaddress@awesome.com"
            />
            <Button
              styleType="secondary"
              label="Join the Email list!"
              type="submit"
            />
          </InputGroup>
        </StyledFooterMail>
      </div>
    </StyledFooterLinks>
    <StyledFooterCredits>
      <div>
        <StyledFooterInfo>
          <Copy
            type="text"
            fontSize="sm"
            fontColor={{ scalable: { color: "gray" } }}
          >
            Copyright &copy; 2018, Heather Turano Coaching, LLC, All Rights
            Reserved
          </Copy>
        </StyledFooterInfo>
        <StyledFooterCreatedBy>
          <Copy
            type="text"
            fontSize="sm"
            fontColor={{ scalable: { color: "gray" } }}
          >
            Designed and developed by
          </Copy>
          <span>&nbsp;</span>
          <Copy
            type="text"
            fontSize="sm"
            fontColor={{ scalable: { color: "secondary" } }}
          >
            <a
              href="http://www.imaginedelements.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Imagined Elements, LLC
            </a>
          </Copy>
        </StyledFooterCreatedBy>
      </div>
      <StyledFooterPrivacy>
        <GatsbyLink to="/privacy-policy">
          <Copy
            type="text"
            fontSize="sm"
            fontColor={{ scalable: { color: "secondary" } }}
          >
            Privary Policy
          </Copy>
        </GatsbyLink>
        <Copy
          type="text"
          fontSize="sm"
          fontColor={{ scalable: { color: "secondary" } }}
        >
          &nbsp;|&nbsp;
        </Copy>
        <GatsbyLink to="/terms-of-service">
          <Copy
            type="text"
            fontSize="sm"
            fontColor={{ scalable: { color: "secondary" } }}
          >
            Terms of Service
          </Copy>
        </GatsbyLink>
        <Copy
          type="text"
          fontSize="sm"
          fontColor={{ scalable: { color: "secondary" } }}
        >
          &nbsp;|&nbsp;
        </Copy>
        <GatsbyLink to="/cookie-policy">
          <Copy
            type="text"
            fontSize="sm"
            fontColor={{ scalable: { color: "secondary" } }}
          >
            Cookie Policy
          </Copy>
        </GatsbyLink>
      </StyledFooterPrivacy>
    </StyledFooterCredits>
  </StyledFooter>
);
