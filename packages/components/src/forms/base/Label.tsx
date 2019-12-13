import React, { FC } from "react";

import { DOM } from "@heather-turano-coaching/design-system";

import { Copy } from "../../typography";

import "./Label.module.scss";

export type LabelProps = DOM.Label & {
  label?: string;
  isValid?: boolean;
};

export const Label: FC<LabelProps> = ({
  label = undefined,
  htmlFor,
  isValid = true
}) => (
  <>
    {label && (
      <label htmlFor={htmlFor} styleName="input-label">
        <Copy
          type="label"
          size="sm"
          color={isValid ? "secondary-0" : "invalid-0"}
        >
          {label}
        </Copy>
      </label>
    )}
  </>
);
