import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export const HeroImage = ({ img, alt }) => (
  <div styleName="hero-img">
    <img src={img} alt={alt} />
  </div>
);

HeroImage.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
