import React, { FC } from "react";
import ReactMarkdown from "react-markdown";

import "./Markdown.module.scss";

export const Markdown: FC<{ content?: string }> = ({ content, children }) =>
  content ? (
    <section styleName="md">
      <div>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </section>
  ) : (
    <section styleName="md">{children}</section>
  );
