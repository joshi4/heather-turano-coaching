import React, { FC, Fragment } from "react";
import { useLocation } from "@reach/router";
import { Copy, Heading, makeFlex } from "@heather-turano-coaching/components";
import styled from "styled-components";
import {
  makeRhythm,
  makeInset,
  makeSize,
  makeColor,
  makeOutset,
  makeResponsive
} from "@heather-turano-coaching/design-system/utils";
import {
  ColorProperties,
  ColorScalePosition
} from "@heather-turano-coaching/design-system/types/composite";
import { useBreakpoints } from "@heather-turano-coaching/hooks";

import { FrameworkLink } from "../general";

interface PageHeaderProps {
  pageTitle: string;
  pageName?: string;
  titleColor?: ColorProperties;
}

const StyledLayoutPageHeader = styled.header`
  & > div {
    ${makeFlex("row", "flex-start", "center")};
    ${makeRhythm({ fontSize: "sm", top: 1, bottom: 0 })};

    ${makeResponsive({
      beginAt: "tabletLandscape",
      style: `
        ${makeRhythm({ fontSize: "sm", top: 1, bottom: 0 })};
      `
    })}

    & > * {
      &:not(:last-child) {
        ${makeOutset({ right: 8 })};
      }
    }

    a {
      text-decoration-color: ${makeColor({
        scalable: { color: "gray", scale: 2 }
      })};
      cursor: pointer;
      transition: all 0.15s ease-in-out;

      &:hover {
        text-decoration: underline;
        color: ${makeColor({ scalable: { color: "gray", scale: 2 } })};
      }
    }

    & p {
      text-transform: uppercase;
    }
  }

  h1,
  h2 {
    text-transform: capitalize;
    ${makeInset({ bottom: 16 })};
    width: 100%;
    border-bottom: ${makeSize({ custom: 1 })} solid
      ${makeColor({ scalable: { color: "secondary", scale: 3 } })};
    line-height: 1.2;
    ${makeRhythm({ fontSize: "sm", top: 1, bottom: 0 })};
  }

  h4 {
    ${makeRhythm({ fontSize: "sm", top: 1, bottom: 1 })}
  }
`;

const basePathName = "blog";

const copy = ({
  label,
  scale
}: {
  label: string;
  scale: ColorScalePosition;
}) => (
  <Copy
    key={label}
    type="label"
    size="xs"
    fontColor={{
      scalable: {
        color: "gray",
        scale: scale
      }
    }}
  >
    {label}
  </Copy>
);

export const PageHeader: FC<PageHeaderProps> = ({
  pageTitle,
  titleColor = { scalable: { color: "secondary" } }
}) => {
  const location = useLocation();
  const [windowWidth, { tabletPortrait }] = useBreakpoints();
  const routes = location.pathname.split("/");
  routes.pop();
  routes[routes.length - 1] = pageTitle;

  return (
    <StyledLayoutPageHeader>
      <div>
        {routes.map((route, index) =>
          index !== routes.length - 1 ? (
            <Fragment key={route}>
              <FrameworkLink to={`/${route}`}>
                {copy({
                  label: index === 0 ? basePathName : route,
                  scale: index !== routes.length - 1 ? 3 : 0
                })}
              </FrameworkLink>
              {copy({
                label: "/",
                scale: 3
              })}
            </Fragment>
          ) : (
            copy({
              label: index === 0 ? basePathName : route,
              scale: index !== routes.length - 1 ? 3 : 0
            })
          )
        )}
      </div>
      <Heading
        fontSize={windowWidth <= tabletPortrait ? "h2" : "h1"}
        fontColor={titleColor}
      >
        {pageTitle}
      </Heading>
    </StyledLayoutPageHeader>
  );
};
