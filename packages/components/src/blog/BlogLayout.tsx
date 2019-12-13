import React, { FC } from "react";

import "./BlogLayout.module.scss";

export const BlogLayout: FC = ({ children }) => (
  <section styleName="blog-layout">{children}</section>
);
