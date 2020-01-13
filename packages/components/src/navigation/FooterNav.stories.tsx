import React, { Fragment } from "react";

import { FooterNav, FooterNavLink, FooterNavLinkContent } from "./FooterNav";

export default {
  component: FooterNav,
  title: "Basic|FooterNav"
};

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

export const base = () => (
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
);
