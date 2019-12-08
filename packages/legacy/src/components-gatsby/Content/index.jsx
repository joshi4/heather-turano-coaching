import React from "react";
import PropTypes from "prop-types";

import { Markdown } from "../../components/typography";

const Content = ({ content, className }) => (
  <Markdown>
    <div className={className}>{content}</div>
  </Markdown>
);

Content.propTypes = {
  content: PropTypes.object.isRequired,
  className: PropTypes.string
};

Content.defaultProps = {
  className: ""
};

export default Content;
