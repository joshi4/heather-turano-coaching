import React from "react";
import PropTypes from "prop-types";

import { Title } from "../../../components/typography";

import "./index.module.scss";

const Section = ({ styleType, title, children, contentOrientation }) => (
  <section styleName={`section ${styleType}`}>
    <header>
      <Title size="lg">{title}</Title>
    </header>
    <article>
      <div styleName={contentOrientation}>{children}</div>
    </article>
  </section>
);

Section.propTypes = {
  styleType: PropTypes.oneOf(["default", "alt", "transparent", "secondary"]),
  contentOrientation: PropTypes.oneOf(["left", "center", "right"]),
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

Section.defaultProps = {
  styleType: "default",
  contentOrientation: "left"
};

export default Section;
