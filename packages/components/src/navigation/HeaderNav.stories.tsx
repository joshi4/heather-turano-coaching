import React from "react";

import { HeaderNav, HeaderNavLinkContent, HeaderNavLink } from "./HeaderNav";

const logos = {
  stacked: require("./assets/htc-logo-stacked.svg").default,
  inline: require("./assets/htc-logo-inline.svg").default
};

export default {
  component: HeaderNav,
  title: "Basic|HeaderNav"
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

export const base = () => (
  <HeaderNav
    navItems={headerNavLinks.map(({ label, route }) => (
      <HeaderNavLink key={label} forceActiveState={label === "blog"}>
        <a href={route}>
          <HeaderNavLinkContent>{label}</HeaderNavLinkContent>
        </a>
      </HeaderNavLink>
    ))}
    logos={logos}
  />
);
export const withCustomHomeRouteAndGatsbyLink = () => (
  <HeaderNav
    homeRoute="/home"
    logos={logos}
    navItems={headerNavLinks.map(({ label, route }) => (
      <HeaderNavLink key={label} forceActiveState={label === "blog"}>
        <a href={route}>
          <HeaderNavLinkContent>{label}</HeaderNavLinkContent>
        </a>
      </HeaderNavLink>
    ))}
  />
);
