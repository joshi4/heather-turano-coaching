import React, { FC } from "react";
import { HTMLLabel } from "@heather-turano-coaching/design-system/types/composite";

import { Copy } from "../../typography";
import "./Label.module.scss";

export type LabelProps = HTMLLabel & {
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
          fontSize={{ size: "sm" }}
          fontColor={{
            scalable: {
              color: isValid ? "secondary" : "error"
            }
          }}
        >
          {label}
        </Copy>
      </label>
    )}
  </>
);
