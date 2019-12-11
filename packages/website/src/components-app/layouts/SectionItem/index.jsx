import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

const SectionItem = ({ children }) => <div styleName="item">{children}</div>;

SectionItem.propTypes = {
  children: PropTypes.any.isRequired
};

export default SectionItem;
