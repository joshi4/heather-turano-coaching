import React, { FC } from "react";

import "./Title.module.scss";

export type TitleProps = {
  size: "h2" | "h3" | "h4";
  copy?: string;
};

export const Title: FC<TitleProps> = ({ size, copy, children }) => {
  switch (size) {
    case "h3":
      return <h5 styleName={size}>{copy || children}</h5>;
    case "h4":
      return <h6 styleName={size}>{copy || children}</h6>;
    case "h2":
    default:
      return <h3 styleName={size}>{copy || children}</h3>;
  }
};
