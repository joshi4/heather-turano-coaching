import React, { FC } from "react";

import "./Control.module.scss";

export const Control: FC = ({ children }) => (
  <div styleName="input-control">{children}</div>
);
