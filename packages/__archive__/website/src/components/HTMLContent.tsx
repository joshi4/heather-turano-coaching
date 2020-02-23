import React, { FC } from "react";

import { Markdown } from "../../../components/src/typography";

export const HTMLContent: FC<{ content: string }> = ({ content }) => (
  <Markdown>
    <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
  </Markdown>
);
