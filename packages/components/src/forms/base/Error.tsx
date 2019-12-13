import React, { FC } from "react";

import { Copy } from "../../typography";

import "./Error.module.scss";

export interface ErrorProps {
  errorMessage?: string;
}

export const Error: FC<ErrorProps> = ({ errorMessage = undefined }) => (
  <>
    {errorMessage && (
      <div styleName="input-error">
        <Copy type="caption" size="xs" color="invalid-0">
          {errorMessage}
        </Copy>
      </div>
    )}
  </>
);
