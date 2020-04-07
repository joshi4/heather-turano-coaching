import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

const Avatar = ({ image, alt }) => (
  <div styleName="avatar">
    <div />
    <img src={image} alt={alt} />
  </div>
);

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Avatar;
