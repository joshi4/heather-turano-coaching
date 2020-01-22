import React, { FC, useState, useRef, useLayoutEffect } from "react";
import { PostOrPage } from "@tryghost/content-api";
import styled from "styled-components";
import {
  useBreakpoints,
  sharedHorizontalBodyPadding,
  makeFlex
} from "@heather-turano-coaching/components";

import { clamp } from "lodash";
import { useSprings, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

import { LayoutBlock, LayoutBlockTitle, LayoutBlockContent } from "../layout";
import { BlogCardFeature, BlogCardFeatureSelector } from "../blog";
import {
  makeSize,
  makeColor,
  makeOutset,
  makeReset
} from "@heather-turano-coaching/design-system/utils";

interface BlockFeaturedPostsProps {
  featuredPosts: PostOrPage[];
}

const StyledMobileBlockFeaturedPosts = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;

  & * {
    white-space: initial;
    box-sizing: border-box;
  }
`;

const StyledDesktopBlockFeaturedPosts = styled.div``;

const StyledBubbleContainer = styled.ul`
  ${makeReset("list")};
  ${makeFlex("row", "flex-end", "center")};
`;

const StyledBubble = styled.li<{ isActive: boolean }>`
  height: ${makeSize("xxs")};
  width: ${makeSize("xxs")};
  border-radius: 50%;
  transition: all 0.15s ease-in-out;
  background: ${({ isActive }) =>
    makeColor({
      scalable: {
        color: isActive ? "secondary" : "light"
      }
    })};

  &:not(:first-child) {
    ${makeOutset({ left: "xxs" })}
  }
`;

type BlogMobileFeatureProps = BlockFeaturedPostsProps & {
  gutterWidth: number;
};

const BlogMobileFeature: FC<BlogMobileFeatureProps> = ({
  featuredPosts,
  gutterWidth
}) => {
  const startingPosition = 0;
  const [containerHeight, setContainerHeight] = useState();
  const [currentBubble, setCurrentBubble] = useState(startingPosition);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (cardRef.current) {
      setContainerHeight(cardRef.current.offsetHeight);
    }
  }, [cardRef, containerHeight]);

  const cardWidth = window.innerWidth - gutterWidth * 2;
  const halfCardWidth = cardWidth / 2;
  const numberOfCards = featuredPosts.length;

  const index = useRef(startingPosition);
  const [springProps, set] = useSprings(numberOfCards, i => ({
    x: i * cardWidth,
    scale: index.current !== i ? 0.96 : 1
  }));

  const bind = useDrag(
    ({
      down,
      movement: [xMove],
      direction: [xDir],
      distance,
      cancel,
      last
    }) => {
      if (down && distance > halfCardWidth && cancel) {
        index.current = clamp(
          index.current + (xDir > 0 ? -1 : 1),
          0,
          numberOfCards - 1
        );
        cancel();
      }

      //@ts-ignore
      return set(i => {
        if (last) {
          setCurrentBubble(index.current);
        }

        const x = (i - index.current) * cardWidth + (down ? xMove : 0);
        const scale = index.current === i ? 1 : 0.96;
        return { x, scale };
      });
    }
  );

  return (
    <LayoutBlock>
      <LayoutBlockTitle title="Featured posts">
        <StyledBubbleContainer>
          {featuredPosts.map((post, i) => (
            <StyledBubble
              key={`${post.id}-bubble`}
              isActive={i === currentBubble}
            />
          ))}
        </StyledBubbleContainer>
      </LayoutBlockTitle>

      <LayoutBlockContent>
        <StyledMobileBlockFeaturedPosts style={{ height: containerHeight }}>
          {springProps.map(({ x, scale }, i) => (
            <animated.div
              {...bind()}
              key={i.toString()}
              style={{
                display: "inline-block",
                position: "absolute",
                top: 0,
                bottom: 0,
                transform: x.interpolate(x => `translate3d(${x}px,0,0)`)
              }}
            >
              <animated.div
                ref={cardRef}
                style={{
                  transform: scale.interpolate(s => `scale(${s})`)
                }}
              >
                <BlogCardFeature featuredPost={featuredPosts[i]} />
              </animated.div>
            </animated.div>
          ))}
        </StyledMobileBlockFeaturedPosts>
      </LayoutBlockContent>
    </LayoutBlock>
  );
};

export const BlockFeaturedPosts: FC<BlockFeaturedPostsProps> = ({
  featuredPosts
}) => {
  const [visibleFeaturedPost, setVisibleFeaturedPost] = useState(
    featuredPosts[0]
  );
  const [windowWidth, { tabletPortrait }] = useBreakpoints();
  const isWindowMobile = windowWidth <= tabletPortrait;

  const gutterWidth = isWindowMobile
    ? sharedHorizontalBodyPadding.phone
    : sharedHorizontalBodyPadding.tabletPortrait;

  return isWindowMobile ? (
    <BlogMobileFeature
      featuredPosts={featuredPosts}
      gutterWidth={gutterWidth}
    />
  ) : (
    <StyledDesktopBlockFeaturedPosts>
      <BlogCardFeature featuredPost={visibleFeaturedPost} />
      {!isWindowMobile && (
        <BlogCardFeatureSelector
          posts={featuredPosts}
          currentlySelectedPost={visibleFeaturedPost}
          setFp={setVisibleFeaturedPost}
        />
      )}
    </StyledDesktopBlockFeaturedPosts>
  );
};
