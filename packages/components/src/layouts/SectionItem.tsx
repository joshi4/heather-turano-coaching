import React, { FC } from "react";

import "./index.module.scss";

export const SectionItem: FC = ({ children }) => (
  <div styleName="item">{children}</div>
);
