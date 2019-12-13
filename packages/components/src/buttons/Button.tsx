import React, { FC } from "react";

import { DOMType__Button } from "@heather-turano-coaching/typescript/types";
import { Primitive_Color } from "@heather-turano-coaching/styles/types";

import { Icon, Copy } from "../typography";

import "./Button.module.scss";

export type ButtonProps = DOMType__Button & {
  label: string;
  styleType?: Primitive_Color;
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
