import React, { FC } from "react";
import { LayoutBlockTitle, LayoutBlock, LayoutBlockContent } from "../layout";

interface BlockSubscribeProps {}

export const BlockSubscribe: FC<BlockSubscribeProps> = () => (
  <LayoutBlock>
    <LayoutBlockTitle title="Subscribe" />
    <LayoutBlockContent>Subscribe coming soon!</LayoutBlockContent>
  </LayoutBlock>
);
