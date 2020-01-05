import React, { useState, FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import {
  makeOutset,
  makeSize,
  makeColor
} from "@heather-turano-coaching/design-system/utils";

export interface CarouselProps {
  entries: any[];
  children: (props: any) => ReactNode;
}

const StyledCarousel = styled.div``;

const CSSCarouselBubble = css<{
  isActive: boolean;
}>`
  height: ${makeSize("md")};
  width: ${makeSize("md")};
  background: ${({ isActive }) =>
    isActive
      ? makeColor({ scalable: { color: "secondary" } })
      : makeColor({ scalable: { color: "light" } })};
  border: 1px solid ${makeColor({ scalable: { color: "secondary", scale: 3 } })};
  border-radius: 50%;
  transition: background 0.15s ease-in-out;
  z-index: 50;

  & + .bubble {
    margin-left: 20px;
  }
`;

const StyledCarouselBubble = styled.button.attrs({ type: "button" })<{
  isActive: boolean;
}>`
  ${CSSCarouselBubble};

  & + ${CSSCarouselBubble} {
    ${makeOutset({ left: 16 })};
  }
`;

const StyledCarouselFooter = styled.footer`
  ${makeOutset({ top: 24 })};
  text-align: center;
`;

export const Carousel: FC<CarouselProps> = ({ entries, children }) => {
  const [currentEntry, setCurrentEntry] = useState(0);

  const goToEntry = (index: number) => setCurrentEntry(index);

  return (
    <StyledCarousel>
      <div>{children({ ...entries[currentEntry] })}</div>
      <StyledCarouselFooter>
        {entries.map((_: any, index: number) => (
          <StyledCarouselBubble
            isActive={index === currentEntry}
            key={index.toString()}
            onClick={() => goToEntry(index)}
          />
        ))}
      </StyledCarouselFooter>
    </StyledCarousel>
  );
};
