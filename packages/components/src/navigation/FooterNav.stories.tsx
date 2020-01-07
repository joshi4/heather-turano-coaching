import React from "react";

import { FooterNav } from "./FooterNav";
import { MainNavItem } from "./HeaderNav";

export default {
  component: FooterNav,
  title: "Basic|FooterNav"
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

export const base = () => <FooterNav navItems={navItems} />;
