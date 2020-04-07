import React, { FC } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { Copy, Heading } from "@heather-turano-coaching/components";

import {
  LayoutBlockTitle,
  LayoutBlock,
  LayoutBlockContent
} from "../../components";

import {
  makeInset,
  makeColor,
  makeRhythm,
  makeSize
} from "@heather-turano-coaching/design-system/utils";

import { FormSubscribe } from "../forms";

interface BlockSubscribeProps {
  displayBlockTitle?: boolean;
}
const StyledSubscribeContnet = styled.div`
  ${makeInset({ horizontal: 32, vertical: 32 })};
  background: ${makeColor({ fixed: "dark" })};

  & > * {
    max-width: ${makeSize({ custom: 400 })};
    margin: 0 auto;
  }
`;

const StyledContentCopy = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    text-align: center;
  }

  p {
    ${makeRhythm({ fontSize: "sm", bottom: 2, top: 1 })};
  }
`;

export const BlockSubscribe: FC<BlockSubscribeProps> = ({
  displayBlockTitle = true
}) => {
  const { contentfulBlockSubscribe: queryData } = useStaticQuery(graphql`
    {
      contentfulBlockSubscribe {
        ...BlockSubscribeFields
      }
    }
  `);

  return (
    <LayoutBlock>
      {displayBlockTitle && (
        <LayoutBlockTitle title={queryData.block[0].title} />
      )}
      <LayoutBlockContent>
        <StyledSubscribeContnet>
          <StyledContentCopy>
            <Heading
              fontSize="h1"
              fontColor={{ fixed: "light" }}
              fontFamily="Covered By Your Grace"
            >
              {queryData.contentTitle}
            </Heading>
            <Copy type="text" fontColor={{ fixed: "light" }}>
              {queryData.description}
            </Copy>
          </StyledContentCopy>
          <FormSubscribe fieldPrefix="BlockSubscribe" />
        </StyledSubscribeContnet>
      </LayoutBlockContent>
    </LayoutBlock>
  );
};
