import React, { FC } from "react";
import { Tag } from "@tryghost/content-api";
import { getCategoriesFromTags } from "../../utils/getCategoriesFromTags";
import { getFeaturedCategories } from "../../utils";
import styled from "styled-components";
import {
  makeInset,
  makeRhythm,
  makeColor
} from "@heather-turano-coaching/design-system/utils";
import {
  Heading,
  Copy,
  Button,
  ButtonGroup
} from "@heather-turano-coaching/components";
import { FontProperties } from "@heather-turano-coaching/design-system/types/composite";
import { LayoutBlockContent, LayoutBlockTitle, LayoutBlock } from "../layout";
import Link from "next/link";

const componentFontSize: FontProperties["fontSize"] = "sm";

const StyledBlockFeaturedCategory = styled.div`
  ${makeInset({ horizontal: 24, top: 16, bottom: 28 })};
  background: ${makeColor({ fixed: "bright-green" })};

  h1,
  h3,
  h3,
  h4 {
    text-transform: capitalize;
  }

  & > p {
    ${makeRhythm({ fontSize: componentFontSize, top: 1, bottom: 1 })};
  }
`;

export const BlockFeaturedCategory: FC<{ tags: Tag[] }> = ({ tags }) => {
  const categories = getCategoriesFromTags(tags);
  const featuredCategories = getFeaturedCategories(categories);
  const cat = featuredCategories[0];

  return (
    <LayoutBlock>
      <LayoutBlockTitle title="Featured Category" />
      <LayoutBlockContent>
        <StyledBlockFeaturedCategory>
          <Heading fontSize="h3" fontColor={{ scalable: { color: "gray" } }}>
            {cat.name}
          </Heading>
          <Copy type="paragraph" fontSize={componentFontSize}>
            {cat.description}
          </Copy>
          <ButtonGroup>
            <Link href={`/categories/${cat.slug}`}>
              <a>
                <Button styleType="secondary" label="Explore this category" />
              </a>
            </Link>
          </ButtonGroup>
        </StyledBlockFeaturedCategory>
      </LayoutBlockContent>
    </LayoutBlock>
  );
};
