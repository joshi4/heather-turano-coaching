import React, { FC } from "react";
import styled from "styled-components";
import { makeOutset } from "@heather-turano-coaching/design-system/utils";

import { Copy } from "../../typography";

export interface ErrorProps {
  errorMessage?: string;
}

const StyledError = styled.div`
  ${makeOutset({ top: 4 })}
`;

export const Error: FC<ErrorProps> = ({ errorMessage = undefined }) => (
  <>
    {errorMessage && (
      <StyledError>
        <Copy
          type="label"
          fontSize="xs"
          fontColor={{ scalable: { color: "error" } }}
        >
          {errorMessage}
        </Copy>
      </StyledError>
    )}
  </>
);
