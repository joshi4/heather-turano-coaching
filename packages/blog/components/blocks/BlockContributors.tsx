import React, { FC } from "react";
import { LayoutBlockTitle, LayoutBlock, LayoutBlockContent } from "../layout";

interface BlockContributorsProps {}

export const BlockContributors: FC<BlockContributorsProps> = () => (
  <LayoutBlock>
    <LayoutBlockTitle title="Contributors" />
    <LayoutBlockContent>Contributors coming soon!</LayoutBlockContent>
  </LayoutBlock>
);
