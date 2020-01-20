import React, { FC } from "react";
import { LayoutBlockTitle, LayoutBlock, LayoutBlockContent } from "../layout";
import {
  InputGroup,
  Input,
  Button,
  Copy,
  Heading
} from "@heather-turano-coaching/components";
import styled from "styled-components";
import {
  makeInset,
  makeColor
} from "@heather-turano-coaching/design-system/utils";

interface BlockSubscribeProps {
  subscribe: any;
  displayBlockTitle?: boolean;
}
const StyledSubscribeContnet = styled.div`
  ${makeInset({ horizontal: 32, vertical: 32 })};
  background: ${makeColor({ fixed: "dark" })};

  h1,
  h2,
  h3,
  h4,
  h5 {
    text-align: center;
  }
}
`;

export const BlockSubscribe: FC<BlockSubscribeProps> = ({ subscribe }) => (
  <LayoutBlock>
    <LayoutBlockTitle title={subscribe.fields.title} />
    <LayoutBlockContent>
      <StyledSubscribeContnet>
        <InputGroup layout="stacked">
          <Heading
            fontSize="h1"
            fontColor={{ fixed: "light" }}
            fontFamily="Covered By Your Grace"
          >
            {subscribe.fields.content.fields.contentTitle}
          </Heading>
          <Copy type="text" fontColor={{ fixed: "light" }}>
            {subscribe.fields.content.fields.description}
          </Copy>
          <Input
            id="subscribe-name"
            name="name"
            placeholder={subscribe.fields.content.fields.namePlaceholder}
          />
          <Input
            id="subscribe-email"
            name="email"
            placeholder={subscribe.fields.content.fields.emailPlaceholder}
          />
          <Button
            id="submit-subscription"
            styleType="accent"
            type="submit"
            label={subscribe.fields.content.fields.submitText}
          />
        </InputGroup>
      </StyledSubscribeContnet>
    </LayoutBlockContent>
  </LayoutBlock>
);
