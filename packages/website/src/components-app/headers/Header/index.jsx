import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import MainNav from "../../navigation/MainNav";
import "./index.module.scss";

const Header = ({ route, ...restProps }) => (
  <header styleName="container">
    <div styleName="search" />
    <div styleName="main">
      <Link to={route} styleName="logo" />
      <MainNav {...restProps} />
    </div>
  </header>
);

Header.propTypes = {
  route: PropTypes.string.isRequired
};

export default Header;
