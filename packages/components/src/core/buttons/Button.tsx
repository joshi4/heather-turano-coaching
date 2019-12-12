import React, { FC } from "react";

import { BaseType__Button } from "@heather-turano-coaching/typescript/types";
import { Color } from "@heather-turano-coaching/styles/types";

import { Icon, Copy } from "../typography";

import "./Button.module.scss";

export type ButtonProps = BaseType__Button & {
  label: string;
  styleType?: Color;
  loading?: boolean;
};

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
