import React, { Fragment } from "react";
// import App from 'next/app'
import { createGlobalStyle } from "styled-components";
import { makeResponsive } from "@heather-turano-coaching/design-system/utils";
import {
  HeaderNav,
  HeaderNavLink,
  HeaderNavLinkContent,
  FooterNav,
  FooterNavLink,
  FooterNavLinkContent
} from "../components";
import { logos } from ".";

const GlobalStyle = createGlobalStyle`
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

// @ts-ignore
const MyApp = ({ Component, pageProps }) => {
  // @ts-ignore
  return (
    <>
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
      <Component {...pageProps} />
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
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
