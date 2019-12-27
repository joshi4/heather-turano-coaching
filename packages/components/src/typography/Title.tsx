import React, { FC } from "react";

import {
  StyledTitleSm,
  StyledTitleMd,
  StyledTitleLg
} from "./_typography.styles";

export type TitleProps = {
  size: "lg" | "md" | "sm";
  copy?: string;
};

export const Title: FC<TitleProps> = ({ size, copy, children }) => {
  switch (size) {
    case "sm":
      return <StyledTitleSm>{copy || children}</StyledTitleSm>;
    case "md":
      return <StyledTitleMd>{copy || children}</StyledTitleMd>;
    case "lg":
    default:
      return <StyledTitleLg>{copy || children}</StyledTitleLg>;
  }
};
