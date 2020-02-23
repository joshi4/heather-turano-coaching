import React, { FC, ReactNode } from "react";
import { createGlobalStyle } from "styled-components";

import {
  makeFontFace,
  makeResponsive
} from "@heather-turano-coaching/design-system/utils";
import Helmet from "react-helmet";

const GlobalStyle = createGlobalStyle`
  html,body {
    margin: 0;
    padding: 0;
  }

  html{
    ${makeResponsive({
      beginAt: "desktop",
      style: `
        font-size: 18px;
      `
    })}
  }

  body {
    overflow-x: hidden;
  }
`;

const fontFaceDefs = makeFontFace();
const fontFaceLinks = fontFaceDefs.reduce(
  (accum, fontFaceDef, i) =>
    typeof fontFaceDef === "string"
      ? [
          ...accum,
          <link
            key={`link-${i.toString()}`}
            rel="stylesheet"
            href={fontFaceDef.split('("')[1].split('")')[0]}
          />
        ]
      : accum,
  [] as ReactNode[]
);

export const Layout: FC = ({ children }) => (
  <>
    <Helmet>{fontFaceLinks}</Helmet>
    <GlobalStyle />
    {children}
  </>
);
