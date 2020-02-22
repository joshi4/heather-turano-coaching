import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

/**
 * @todo Convert images to gatsby-image
 */
// import Img from "gatsby-image";

import React, { Fragment, ReactNode } from "react";
import { createGlobalStyle } from "styled-components";
import {
  makeResponsive,
  makeFontFace
} from "@heather-turano-coaching/design-system/utils";
import {
  HeaderNav,
  HeaderNavLink,
  HeaderNavLinkContent,
  FooterNav,
  FooterNavLink,
  FooterNavLinkContent,
  logos
} from "../../components";

const GlobalStyle = createGlobalStyle`
  html,body {
    margin: 0;
    padding: 0;
  }

  html{
    ${makeResponsive({
      beginAt: "desktop",
      style: `
        font-size: 18px;
      `
    })}
  }

  body {
    overflow-x: hidden;
  }
`;

const fontFaceDefs = makeFontFace();
const fontFaceLinks = fontFaceDefs.reduce(
  (accum, fontFaceDef, i) =>
    typeof fontFaceDef === "string"
      ? [
          ...accum,
          <link
            key={`link-${i.toString()}`}
            rel="stylesheet"
            href={fontFaceDef.split('("')[1].split('")')[0]}
          />
        ]
      : accum,
  [] as ReactNode[]
);

/**
 * @todo Get this data from Contentful API
 */
const headerNavLinks = [
  {
    label: "home",
    route: "https://heatherturanocoaching.com"
  },
  {
    label: "about",
    route: "https://heatherturanocoaching.com/about"
  },
  {
    label: "services",
    route: "https://heatherturanocoaching.com/services"
  },
  {
    label: "blog",
    route: "/",
    forceActiveState: true
  }
];
const footerNavLinks = {
  rightNavItems: [],
  terms: [
    {
      label: "Privacy Policy",
      route: "/privacy-policy"
    },
    {
      label: "Terms of Service",
      route: "/terms-of-service"
    },
    {
      label: "Cookie Policy",
      route: "/cookie-policy"
    }
  ]
};

export const Layout = (props: any) => (
  <StaticQuery
    query={graphql`
      query GhostSettings {
        allGhostSettings {
          edges {
            node {
              ...GhostSettingsFields
            }
          }
        }
      }
    `}
    render={data => {
      const site = data.allGhostSettings.edges[0].node;

      return (
        <>
          <Helmet>
            <html lang={site.lang} />
            {fontFaceLinks}
          </Helmet>
          <GlobalStyle />
          <HeaderNav
            homeRoute="https://heatherturanocoaching.com"
            logos={logos}
            navItems={headerNavLinks.map(({ label, route }) => (
              <HeaderNavLink key={label} forceActiveState={label === "blog"}>
                <a href={route}>
                  <HeaderNavLinkContent>{label}</HeaderNavLinkContent>
                </a>
              </HeaderNavLink>
            ))}
          />
          {props.children}
          <FooterNav
            leftNav={{
              title: "Browse",
              items: headerNavLinks.map(({ label, route }) => (
                <FooterNavLink key={label}>
                  <a href={route}>
                    <FooterNavLinkContent>{label}</FooterNavLinkContent>
                  </a>
                </FooterNavLink>
              ))
            }}
            rightNav={{
              title: "Explore",
              items:
                footerNavLinks.rightNavItems.length > 0
                  ? footerNavLinks.rightNavItems.map(({ label, route }) => (
                      <FooterNavLink key={label}>
                        <a href={route}>
                          <FooterNavLinkContent>{label}</FooterNavLinkContent>
                        </a>
                      </FooterNavLink>
                    ))
                  : null
            }}
            terms={footerNavLinks.terms.map(({ label, route }, index) => (
              <Fragment key={label}>
                <FooterNavLink>
                  <a href={route}>
                    <FooterNavLinkContent>{label}</FooterNavLinkContent>
                  </a>
                </FooterNavLink>
                {index !== footerNavLinks.terms.length - 1 && (
                  <FooterNavLinkContent>&nbsp;|&nbsp;</FooterNavLinkContent>
                )}
              </Fragment>
            ))}
          />
        </>
      );
    }}
  />
);
