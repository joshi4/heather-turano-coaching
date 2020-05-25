import { makeOutset } from "@heather-turano-coaching/design-system";
import React, { FC } from "react";
import styled from "styled-components";

import { Typography } from "../../typography";

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
        <Typography
          variant="label"
          fontSize="xs"
          fontColor={{ scalable: { color: "error" } }}
        >
          {errorMessage}
        </Typography>
      </StyledError>
    )}
  </>
);
