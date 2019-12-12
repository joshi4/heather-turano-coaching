import React from "react";
import PropTypes from "prop-types";

import { HeroImage } from "./HeroImage";
import { Heading, Paragraph } from "../../../components/typography";

import "./index.module.scss";

const Hero = ({ img, alt, title, subTitle, children }) => (
  <section styleName="hero">
    <HeroImage img={img} alt={alt} />
    <div styleName="top">
      <div>
        <Heading size="xl" copy={`'${title}'`} color="lightscale-0" />
        <div styleName="block sm">
          <Paragraph size="xl" color="lightscale-0">
            {subTitle}
          </Paragraph>
        </div>
      </div>
      <div styleName="block lg">{children}</div>
    </div>
  </section>
);

Hero.propTypes = {
  children: PropTypes.any.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Hero;
