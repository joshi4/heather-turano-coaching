import React, { FC } from "react";

import "./BlogList.module.scss";

export const BlogList: FC = ({ children }) => (
  <ul styleName="blog-list">{children}</ul>
);
