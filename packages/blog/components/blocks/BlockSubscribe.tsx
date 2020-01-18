import React, { FC } from "react";
import { LayoutBlockTitle, LayoutBlock, LayoutBlockContent } from "../layout";
import {
  InputGroup,
  Input,
  Button,
  Copy
} from "@heather-turano-coaching/components";

interface BlockSubscribeProps {
  subscribe: any;
}

export const BlockSubscribe: FC<BlockSubscribeProps> = ({ subscribe }) => (
  <LayoutBlock>
    <LayoutBlockTitle title={subscribe.fields.title} />
    <LayoutBlockContent>
      <InputGroup layout="stacked">
        <Copy type="paragraph">{subscribe.fields.content.fields.context}</Copy>
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
          styleType="secondary"
          type="submit"
          label={subscribe.fields.content.fields.submitText}
        />
      </InputGroup>
    </LayoutBlockContent>
  </LayoutBlock>
);
