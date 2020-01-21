import React, { FC, useRef } from "react";
import { LayoutBlockTitle, LayoutBlock, LayoutBlockContent } from "../layout";
import { PostOrPage } from "@tryghost/content-api";
import { BlogPostList } from "../blog";
import {
  useSticky,
  headerNavVerticalPadding
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
  transition: top 0.1s linear;
  background: transparent;
  top: 0;
  width: 100%;

  ${({ isSticky }) =>
    isSticky &&
    css`
      position: fixed;
      top: ${makeSpace({ custom: headerNavVerticalPadding })};

      background: ${makeColor({ fixed: "light" })};
    `}
`;

export const BlockRecentPosts: FC<BlockRecentPostsProps> = ({
  title = "recent posts",
  posts
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const isSticky = useSticky<HTMLDivElement>({
    ref: wrapperRef,
    offset: headerNavVerticalPadding
  });

  return (
    <LayoutBlock>
      <StyledStickyWrapper
        ref={wrapperRef}
        wrapperHeight={targetRef.current?.offsetHeight}
      >
        <StyledStickyTarget
          isSticky={isSticky}
          ref={targetRef}
          style={{ width: wrapperRef.current?.offsetWidth }}
        >
          <LayoutBlockTitle title={title} />
        </StyledStickyTarget>
      </StyledStickyWrapper>
      <LayoutBlockContent>
        <BlogPostList posts={posts} />
      </LayoutBlockContent>
    </LayoutBlock>
  );
};
