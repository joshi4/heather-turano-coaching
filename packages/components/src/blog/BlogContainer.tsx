import React, { FC } from "react";

import "./BlogContainer.module.scss";

export const BlogContainer: FC = ({ children }) => (
  <section styleName="blog">{children}</section>
);
