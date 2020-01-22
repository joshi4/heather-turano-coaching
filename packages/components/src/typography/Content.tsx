import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import {
  makeRhythm,
  makeFont,
  makeReset,
  makeInset,
  makeColor,
  makeSpace,
  makeSize
} from "@heather-turano-coaching/design-system/utils";
import { CSSH2, CSSH3, CSSH4 } from "./Heading";
import { copyFontMap } from "./Copy";
import { FontProperties } from "@heather-turano-coaching/design-system/types/composite";
import { createImageBorder } from "../shared";

const contentLineHeight: FontProperties["fontSize"] = "md";

const copyFontStyle = makeFont({
  ...copyFontMap["text"],
  fontWeight: "regular",
  fontSize: "sm",
  lineHeight: contentLineHeight
});

console.log(copyFontStyle);

const StyledContent = styled.section`
  display: block;
  padding: ${makeSize({ custom: 30 })} 0;

  & > div.content {
    * {
      box-sizing: border-box;
    }

    h1 {
      ${CSSH2};
      ${makeRhythm({ fontSize: contentLineHeight, top: 3, bottom: 1 })};
    }

    h2 {
      ${CSSH3};
      ${makeRhythm({ fontSize: contentLineHeight, top: 3, bottom: 1 })};
      line-height: 1.2;
    }

    h3 {
      ${CSSH4};
      ${makeRhythm({ fontSize: contentLineHeight, top: 2, bottom: 1 })};
    }

    p {
      ${copyFontStyle}
      ${makeRhythm({ fontSize: contentLineHeight, top: 1, bottom: 0 })};
    }

    ol,
    ul {
      ${makeRhythm({ fontSize: contentLineHeight, top: 1, bottom: 1 })};
      ${makeInset({ horizontal: 60 })};
    }

    a {
      ${makeReset("anchor")};
      display: inline;
      background: ${makeColor({
        scalable: { color: "accent", scale: 3 }
      })};
      text-decoration: underline;
      text-decoration-color: ${makeColor({
        scalable: { color: "gray", scale: 0 }
      })};
      transition: background .15s ease-in-out;

      &:hover {
        background: ${makeColor({
          scalable: { color: "accent", scale: 2 }
        })};
      }

      &:visited{
        color: ${makeColor({ scalable: { color: "gray" } })};
      }
    }

    li {
      ${copyFontStyle}
    }

    img {
      max-width: 100%;
      ${createImageBorder({ scalable: { color: "primary" } })}
    }

    figure {
      ${makeReset("figure")};
      ${makeRhythm({ fontSize: contentLineHeight, top: 2, bottom: 2 })};
      background: ${makeColor({ scalable: { color: "light", scale: 2 } })};

      figcaption {
        ${makeInset({ top: 16, bottom: 16 })};
        text-align: center;
        ${makeFont({
          ...copyFontMap["paragraph"],
          fontSize: contentLineHeight,
          fontColor: { scalable: { color: "primary" } },
          fontStyle: "italic"
        })}
      }
    }

    blockquote {
      ${makeReset("blockquote")};
      position: relative;
      ${makeRhythm({ fontSize: contentLineHeight, top: 2, bottom: 2 })};
      background: ${makeColor({ scalable: { color: "primary", scale: 3 } })};
      ${makeInset({ horizontal: 32, vertical: 32 })};
      margin-left: ${makeSpace("md")};
      margin-right: ${makeSpace("md")};
      ${makeFont({
        ...copyFontMap["paragraph"],
        fontSize: contentLineHeight,
        fontColor: { scalable: { color: "gray" } },
        fontStyle: "italic"
      })};
      overflow: hidden;

      /* Add this back in for the quotation in the background of the quoteblock */
      /* &::before {
        position: absolute;
        top: -8px;
        left: 20px;
        ${makeFont({
          fontSize: "h1",
          fontColor: { scalable: { color: "primary" } }
        })};
        font-family: "Font Awesome 5 Pro";
        font-weight: 900;
        font-size: 5rem;
        content: "\f10d";
        opacity: 0.1;
        pointer-events: none;
      } */

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: ${makeSize({ custom: 4 })};
        background: ${makeColor({ scalable: { color: "primary" } })};
      }
    }
  }
`;

export const Content: FC<{ markdown?: string; htmlContent: string }> = ({
  markdown,
  htmlContent
}) => (
  <StyledContent>
    {markdown ? (
      <ReactMarkdown>{markdown}</ReactMarkdown>
    ) : (
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    )}
  </StyledContent>
);
