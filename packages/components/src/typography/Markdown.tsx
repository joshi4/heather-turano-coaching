import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import {
  makeFont,
  makeColor
} from "@heather-turano-coaching/design-system/utils";

const StyledMarkdown = styled.section`
  display: block;
  padding: 30px 0;

  & > div {
    max-width: 700px;
    margin: 0 auto;

    h1 {
      ${makeFont({ fontSize: "h1" })};
      margin-top: 100px;
      line-height: 1.4;

      & + p {
        margin-top: 10px;
      }

      & + h2 {
        margin-top: 30px;
      }
    }

    h2 {
      ${makeFont({ fontSize: "h2" })};
      margin-top: 60px;
      line-height: 1.4;

      & + p {
        margin-top: 10px;
      }
    }

    p {
      ${makeFont({ fontSize: "lg" })};

      & + p {
        margin-top: 26px;
      }
    }

    ol {
      list-style-type: decimal;
    }

    ul {
      list-style-type: decimal;
    }

    ol,
    ul {
      margin: 30px 0;
      padding: 0;

      li {
        ${makeFont({
          fontSize: "lg",
          fontColor: { type: "scalable", color: "secondary", scale: 0 }
        })};
        margin-left: 40px;
        margin-bottom: 10px;

        font-style: bold;

        & > p {
          ${makeFont({ fontSize: "lg" })};
        }
      }

      & + p {
        margin-top: 30px;
      }
    }

    img {
      /* @include image__border; */
      width: 100%;
      margin-top: 20px;
    }

    blockquote {
      position: relative;
      padding: 20px;
      margin: 40px;
      background: ${makeColor({
        type: "scalable",
        color: "lightscale",
        scale: 3
      })};

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 5px;
        background: ${makeColor({
          type: "scalable",
          color: "primary",
          scale: 2
        })};
      }

      & > p {
        ${makeFont({
          fontSize: "xl",
          fontColor: { type: "scalable", color: "grayscale", scale: 2 }
        })}
        font-style: italic;

        & + p {
          margin-top: 20px;
        }
      }
    }
    /* 
    // code {
    //   @include font_machine(
    //     100,
    //     $style: italic,
    //     $size: 12px,
    //     $color: $color-primary-1
    //   );
    //   display: block;
    //   width: 100%;
    //   text-align: center;
    //   padding: 0 20px;
    //   top: -40px;
    // } */
  }
`;

export const Markdown: FC<{ content?: string }> = ({ content, children }) => (
  <StyledMarkdown>
    {content ? <ReactMarkdown>{content}</ReactMarkdown> : <>{children}</>}
  </StyledMarkdown>
);
