import React, { FC, useRef } from "react";
import { LayoutBlockTitle, LayoutBlock, LayoutBlockContent } from "../layout";
import { PostOrPage } from "@tryghost/content-api";
import { BlogPostList } from "../blog";
import {
  useSticky,
  headerNavHeight
} from "@heather-turano-coaching/components";
import styled, { css } from "styled-components";
import {
  makeSize,
  makeSpace,
  makeColor
} from "@heather-turano-coaching/design-system/utils";

interface BlockRecentPostsProps {
  posts: PostOrPage[];
  title?: string;
}

const StyledStickyWrapper = styled.div<{ wrapperHeight?: number }>`
  position: relative;
  z-index: 200;

  ${({ wrapperHeight }) =>
    wrapperHeight &&
    css`
      height: ${makeSize({ custom: wrapperHeight })};
    `}
`;

const StyledStickyTarget = styled.div<{ isSticky: boolean }>`
  transition: all 0.2s linear;
  background: transparent;
  left: 0;
  right: 0;
  width: 100%;

  ${({ isSticky }) =>
    isSticky &&
    css`
      position: fixed;
      top: ${makeSpace({ custom: headerNavHeight })};
      background: ${makeColor({ scalable: { color: "primary", scale: 3 } })};
      left: 0;
      right: 0;
      width: 100%;

      & > * {
        max-width: ${makeSize({ custom: 1024 })};
        margin: 0 auto;
      }
    `}
`;

export const BlockRecentPosts: FC<BlockRecentPostsProps> = ({
  title = "recent posts",
  posts
}) => {
  const conatinerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const isSticky = useSticky<HTMLDivElement>({
    ref: conatinerRef,
    offset: headerNavHeight
  });

  return (
    <LayoutBlock>
      <StyledStickyWrapper
        ref={conatinerRef}
        wrapperHeight={titleRef.current?.offsetHeight}
      >
        <StyledStickyTarget isSticky={isSticky} ref={titleRef}>
          <LayoutBlockTitle title={title} />
        </StyledStickyTarget>
      </StyledStickyWrapper>
      <LayoutBlockContent>
        <BlogPostList posts={posts} />
      </LayoutBlockContent>
    </LayoutBlock>
  );
};
