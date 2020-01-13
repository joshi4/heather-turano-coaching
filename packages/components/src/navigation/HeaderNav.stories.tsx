import React, { FC } from "react";
import Link from "gatsby-link";

import { HeaderNav, MainNavItem, MainNavLinkProps } from "./HeaderNav";

const logos = {
  stacked: require("./assets/htc-logo-stacked.svg").default,
  inline: require("./assets/htc-logo-inline.svg").default
};

export default {
  component: HeaderNav,
  title: "Basic|HeaderNav"
};

const navItems: MainNavItem[] = [
  {
    label: "Home",
    route: "/home"
  },
  {
    label: "About",
    route: "/about"
  },
  {
    label: "Services",
    route: "/services"
  },
  {
    label: "Blog",
    route: "blog.livelifemindful.com"
  }
];

const GatsbyLink: FC<MainNavLinkProps> = ({
  route,
  activeClassName,
  linkContent
}) => (
  <Link to={route} activeClassName={activeClassName}>
    {linkContent}
  </Link>
);

export const base = () => <HeaderNav navItems={navItems} logos={logos} />;
export const withCustomHomeRouteAndGatsbyLink = () => (
  <HeaderNav
    homeRoute="/home"
    LinkComponent={GatsbyLink}
    logos={logos}
    navItems={[
      {
        label: "Home",
        route: "/home"
      },
      {
        label: "About",
        route: "/about"
      },
      {
        label: "Services",
        route: "/services"
      },
      {
        label: "Blog",
        route: "blog.livelifemindful.com",
        anchorLink: true
      }
    ]}
  />
);
