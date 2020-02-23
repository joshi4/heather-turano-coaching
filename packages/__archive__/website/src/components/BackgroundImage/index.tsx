import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

const BackgroundImage = ({
  image,
  alt,
  height,
  xPos,
  yPos,
  children,
  fadeUp
}) => (
  <div styleName={`bg-image ${fadeUp ? "fadeUp" : ""}`} style={{ height }}>
    <img
      src={image}
      alt={alt}
      style={{ objectPosition: `${xPos}% ${yPos}%` }}
    />
    <div styleName="content">{children}</div>
  </div>
);

BackgroundImage.propTypes = {
  image: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  xPos: PropTypes.number,
  yPos: PropTypes.number,
  fadeUp: PropTypes.bool,
  children: PropTypes.any.isRequired
};

BackgroundImage.defaultProps = {
  xPos: 0,
  yPos: 0,
  fadeUp: false
};

export default BackgroundImage;
