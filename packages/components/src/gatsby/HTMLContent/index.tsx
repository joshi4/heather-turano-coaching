import React from "react";
import PropTypes from "prop-types";
import { Markdown } from "../../components/typography";

export const HTMLContent = ({ content }) => (
  // eslint-disable-next-line
  <Markdown>
    <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
  </Markdown>
);

HTMLContent.propTypes = {
  content: PropTypes.node.isRequired
};

export default HTMLContent;
