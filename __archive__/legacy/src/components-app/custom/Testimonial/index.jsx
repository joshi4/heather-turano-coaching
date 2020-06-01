import React from "react";
import PropTypes from "prop-types";

import { Paragraph, Text } from "../../../components/typography";

import { Avatar } from "../../images";

import "./index.module.scss";

const Testimonial = ({ image, type, location, quote }) => (
  <div styleName="testimonial">
    <Avatar image={image} alt={type} />
    <div styleName="content">
      <Paragraph size="md" color="grayscale-0">
        {quote}
      </Paragraph>
      <div styleName="meta">
        <Text size="sm" color="grayscale-1">
          {type}
        </Text>
        <Text size="sm" color="secondary-0">
          <span>&nbsp;-&nbsp;</span>
          {location}
        </Text>
      </div>
    </div>
  </div>
);

Testimonial.propTypes = {
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired
};

export default Testimonial;
