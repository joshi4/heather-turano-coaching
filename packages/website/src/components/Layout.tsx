import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import { Header, Footer } from "../app/layout";

import "./index.module.scss";
import { FC } from "react";

const menuItems = [
  {
    title: "home",
    route: "/"
  },
  {
    title: "about",
    route: "/about"
  },
  {
    title: "work with me",
    route: "/work-with-me"
  },
  {
    title: "contact",
    route: "/contact"
  },
  {
    title: "blog",
    route: "/blog"
  }
];

const Layout: FC<{}> = ({ children, ...restProps }) => (
  <div styleName="main">
    <Helmet
      title="Home | Heather Turano Coaching"
      bodyAttributes={{ class: "" }}
    />
    <Header {...restProps} navItems={menuItems} route={menuItems[0].route} />
    <section styleName="content">{children}</section>
    <Footer quickLinks={menuItems} />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
