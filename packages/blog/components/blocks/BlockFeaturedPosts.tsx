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
  activeCardPosition: "middle" | "full";
};

const BlogMobileFeature: FC<BlogMobileFeatureProps> = ({
  featuredPosts,
  gutterWidth,
  activeCardPosition = "middle"
}) => {
  const initialSelectedCardIndex = 0;
  const [containerHeight, setContainerHeight] = useState();
  const [currentBubble, setCurrentBubble] = useState(initialSelectedCardIndex);
  const cardRef = useRef<HTMLDivElement>(null);
  // const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (cardRef.current) {
      setContainerHeight(cardRef.current.offsetHeight);
    }
  }, [cardRef, containerHeight]);

  const cardWidth = window.innerWidth - 48 - gutterWidth * 2;
  const halfCardWidth = cardWidth / 2;
  const cardSlice = cardWidth * 0.13;
  const numberOfCards = featuredPosts.length;
  const xOffset =
    activeCardPosition === "middle"
      ? (window.innerWidth - 48) / 2 - halfCardWidth
      : 0;
  const index = useRef(initialSelectedCardIndex);

  const getDistance = (cardNum: number): number =>
    Math.abs(index.current - cardNum);

  /**
   * Determines the absolute distance a card is away from the
   * currently selected card and returns the percetange
   * value at which that card should be scaled
   * @param cardNum index of the card that is being set in a loop
   */
  const getScale = (cardNum: number): number => {
    const scaleFactor = getDistance(cardNum);
    const scaleValue = (100 - scaleFactor * 8) / 100;
    return scaleValue;
  };

  const getBlur = (cardNum: number): number => {
    const blurFactor = getDistance(cardNum);
    return blurFactor;
  };

  const getOverlay = (cardNum: number): number => {
    const overlayFactor = getDistance(cardNum);
    const overlayValue = (overlayFactor * 4) / 10;
    return overlayValue;
  };

  const getZ = (cardNum: number): number => {
    const zFactor = 1000 - getDistance(cardNum);
    return zFactor;
  };

  const getPosition = (cardNum: number): number => {
    const position = (cardNum - index.current) * cardSlice + xOffset;
    return position;
  };

  const [springProps, set] = useSprings(numberOfCards, i => {
    return {
      x: getPosition(i),
      scale: getScale(i),
      blur: getBlur(i),
      overlay: getOverlay(i),
      z: getZ(i)
    };
  });

  const bind = useDrag(
    ({
      down,
      movement: [xMove],
      direction: [xDir],
      distance,
      cancel,
      last
    }) => {
      if (down && distance > cardSlice && cancel) {
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

        // console.log("------");
        // console.log(i, index.current, xMove);

        const movement = down ? xMove : 0;

        console.log(getPosition(i) + movement);

        return {
          x: getPosition(i) + movement,
          scale: getScale(i),
          blur: getBlur(i),
          overlay: getOverlay(i),
          z: getZ(i)
        };
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
          {springProps.map(({ x, scale }, i) => {
            const action = i === index.current ? bind : () => ({});
            console.log(i, index);
            console.log(action);

            return (
              <animated.div
                {...action()}
                key={i.toString()}
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  transform: x.interpolate(xv => `translate3d(${xv}px,0,0)`),
                  // filter: blur.interpolate(
                  //   b => `blur(${makeSize({ custom: b })})`
                  // ),
                  zIndex: getZ(i)
                }}
              >
                <animated.div
                  ref={cardRef}
                  style={{ transform: scale.interpolate(s => `scale(${s})`) }}
                >
                  <BlogCardFeature featuredPost={featuredPosts[i]} />
                </animated.div>
              </animated.div>
            );
          })}
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

  const gutterWidth =
    windowWidth < tabletPortrait ? sharedHorizontalBodyPadding.phone : 100;

  return isWindowMobile ? (
    <BlogMobileFeature
      featuredPosts={featuredPosts}
      gutterWidth={gutterWidth}
      activeCardPosition="middle"
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
