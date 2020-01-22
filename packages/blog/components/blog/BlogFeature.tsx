import React, { FC, useState, useRef, useLayoutEffect } from "react";
import { PostOrPage } from "@tryghost/content-api";
import styled from "styled-components";
import {
  useBreakpoints,
  sharedHorizontalBodyPadding
} from "@heather-turano-coaching/components";

import { clamp } from "lodash";
import { useSprings, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

import { BlogCardFeature } from "./BlogCardFeature";
import { BlogCardFeatureSelector } from "./BlogCardFeatureSelector";

interface BlogFeatureProps {
  featuredPosts: PostOrPage[];
}

const StyledMobileBlogFeature = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;

  & * {
    white-space: initial;
    box-sizing: border-box;
  }
`;

const StyledDesktopBlogFeature = styled.div``;

type BlogMobileFeatureProps = BlogFeatureProps & {
  gutterWidth: number;
};

const BlogMobileFeature: FC<BlogMobileFeatureProps> = ({
  featuredPosts,
  gutterWidth
}) => {
  const [containerHeight, setContainerHeight] = useState();
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (cardRef.current) {
      setContainerHeight(cardRef.current.offsetHeight);
    }
  }, [cardRef, containerHeight]);

  const cardWidth = window.innerWidth - gutterWidth * 2;
  const halfCardWidth = cardWidth / 2;
  const numberOfCards = featuredPosts.length;

  const index = useRef(0);
  const [springProps, set] = useSprings(numberOfCards, i => ({
    x: i * cardWidth,
    scale: index.current !== i ? 0.96 : 1
  }));

  const bind = useDrag(
    ({ down, movement: [xMove], direction: [xDir], distance, cancel }) => {
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
        const x = (i - index.current) * cardWidth + (down ? xMove : 0);
        const scale = index.current === i ? 1 : 0.96;
        return { x, scale };
      });
    }
  );

  return (
    <StyledMobileBlogFeature style={{ height: containerHeight }}>
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
    </StyledMobileBlogFeature>
  );
};

export const BlogFeature: FC<BlogFeatureProps> = ({ featuredPosts }) => {
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
    <StyledDesktopBlogFeature>
      <BlogCardFeature featuredPost={visibleFeaturedPost} />
      {!isWindowMobile && (
        <BlogCardFeatureSelector
          posts={featuredPosts}
          currentlySelectedPost={visibleFeaturedPost}
          setFp={setVisibleFeaturedPost}
        />
      )}
    </StyledDesktopBlogFeature>
  );
};
