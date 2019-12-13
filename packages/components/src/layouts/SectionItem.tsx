import React, { FC } from "react";

import "./SectionItem.module.scss";

export const SectionItem: FC = ({ children }) => (
  <div styleName="item">{children}</div>
);
