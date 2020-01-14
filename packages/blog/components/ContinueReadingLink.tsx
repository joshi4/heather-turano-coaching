import React, { FC } from "react";
import Link from "next/link";
import { Copy } from "@heather-turano-coaching/components";
import {
  makeOutset,
  makeColor
} from "@heather-turano-coaching/design-system/utils";
import styled from "styled-components";

const StyledContinueReadingLink = styled.div`
  ${makeOutset({ vertical: 16 })};
  a {
    display: inline-block;
    text-decoration-color: ${makeColor({ scalable: { color: "accent" } })};
  }
`;

export const ContinueReadingLink: FC<{ href: string }> = ({ href }) => (
  <StyledContinueReadingLink>
    <Link href={`post/${href}`}>
      <a>
        <Copy
          type="label"
          fontSize="md"
          fontColor={{ scalable: { color: "accent" } }}
        >
          Continue reading
        </Copy>
      </a>
    </Link>
  </StyledContinueReadingLink>
);
