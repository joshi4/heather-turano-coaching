import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

import "./index.module.scss";

export const Markdown = ({ content, children }) =>
  content ? (
    <section styleName="md">
      <div>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </section>
  ) : (
    <section styleName="md">{children}</section>
  );

Markdown.propTypes = {
  content: PropTypes.any,
  children: PropTypes.node
};

Markdown.defaultProps = {
  content: null,
  children: null
};

export default Markdown;
