import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

const FooterImage = ({ img, alt, children }) => (
  <div styleName="footer">
    <div>{children}</div>
    <div styleName="img">
      <img src={img} alt={alt} />
    </div>
  </div>
);

FooterImage.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export default FooterImage;
