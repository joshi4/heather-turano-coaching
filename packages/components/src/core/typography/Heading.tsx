import React, { FC } from "react";

import { HeadingSize, Color } from "@heather-turano-coaching/styles/types";
import { BaseType__Heading } from "@heather-turano-coaching/typescript/types";

import { TypColor } from "./TypColor";

import "./Heading.module.scss";

export type HeadingProps = BaseType__Heading & {
  size?: HeadingSize;
  color?: Color;
  copy?: string | undefined;
};

export const Heading: FC<HeadingProps> = ({
  size = "h1",
  color = "grayscale",
  copy = undefined,
  children = undefined
}) => {
  switch (size) {
    case "h1":
      return (
        <h1 styleName={size}>
          <TypColor color={color}>{copy || children}</TypColor>
        </h1>
      );
    case "h2":
      return (
        <h2 styleName={size}>
          <TypColor color={color}>{copy || children}</TypColor>
        </h2>
      );
    case "h3":
      return (
        <h3 styleName={size}>
          <TypColor color={color}>{copy || children}</TypColor>
        </h3>
      );
    case "h4":
      return (
        <h4 styleName={size}>
          <TypColor color={color}>{copy || children}</TypColor>
        </h4>
      );
    case "h5":
      return (
        <h4 styleName={size}>
          <TypColor color={color}>{copy || children}</TypColor>
        </h4>
      );
    default:
      return (
        <h1>
          <TypColor color={color}>{copy || children}</TypColor>
        </h1>
      );
  }
};
