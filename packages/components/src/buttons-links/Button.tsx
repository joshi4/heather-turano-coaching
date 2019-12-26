import React, { FC } from "react";

import { HTML__Button } from "@heather-turano-coaching/design-system/types/composite";
import { Color } from "@heather-turano-coaching/design-system/types/primitive";
import {
  makeSize,
  makeColor
} from "@heather-turano-coaching/design-system/utils";

import "./Button.module.scss";

import { Icon, Copy } from "../typography";

export type ButtonProps = HTML__Button & {
  label: string;
  styleType?: Color;
  loading?: boolean;
};

console.log(makeSize({ size: "sm" }));
console.log(makeColor({ type: "scalable", color: "primary" }));

export const Button: FC<ButtonProps> = ({
  label,
  styleType = "primary",
  loading = false,
  ...restProps
}) => (
  <button
    styleName={styleType}
    disabled={restProps.disabled || loading}
    {...restProps}
  >
    {loading ? (
      <Icon size="md" icon="spinner" spin />
    ) : (
      <Copy type="paragraph" size="md">
        {label}
      </Copy>
    )}
  </button>
);
