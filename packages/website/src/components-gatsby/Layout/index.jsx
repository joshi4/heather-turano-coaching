import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import { Header } from "../../components-app/headers";
import { Footer } from "../../components-app/footers";

import "./index.module.scss";

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

const Layout = ({ children, ...restProps }) => (
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
