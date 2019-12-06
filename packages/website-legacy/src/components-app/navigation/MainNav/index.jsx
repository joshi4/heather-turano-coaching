import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import styles from "./index.module.scss";
import { Paragraph } from "../../../components/typography";

const MainNav = ({ navItems }) => (
  <nav>
    <ul styleName="nav">
      {navItems.map(({ title, route }) => (
        <li key={title} styleName="link">
          <Link to={`${route || title}`} activeClassName={styles.active}>
            <Paragraph size="md" color="grayscale-3">
              {title}
            </Paragraph>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

MainNav.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      route: PropTypes.string
    })
  ).isRequired
};

export default MainNav;
