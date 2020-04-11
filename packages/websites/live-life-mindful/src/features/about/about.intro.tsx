import {
  Heading,
  Image,
  Section,
  SectionCopy,
  SectionSpacer,
} from "@heather-turano-coaching/components";
import {
  makeFont,
  makeInset,
  makeResponsive,
  makeSize,
} from "@heather-turano-coaching/design-system/utils";
import { useBreakpoints } from "@heather-turano-coaching/hooks";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";
import styled from "styled-components";

import { ContentfulRichText } from "../../components";

const StyledAboutImageSection = styled.div`
  width: 100%;
  position: relative;

  ${makeResponsive({
    beginAt: "tabletLandscape",
    style: `
      flex: 2;
    `,
  })}

  &::after {
    content: "";
    position: absolute;
    display: block;
    top: -1px;
    left: 0;
    right: 0;
    width: 100%;
    height: 50%;
    background-image: linear-gradient(
      180deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 100%
    );

    ${makeResponsive({
      beginAt: "tabletLandscape",
      style: `
        top: 0;
        bottom: 0;
        left: -1;
        width: 50%;
        height: 100%;
        background-image: linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0.00) 100%);
      `,
    })}
  }
`;

const StyledAboutTitleSection = styled.div`
  ${makeInset({ horizontal: 40, vertical: 40 })};
  text-align: center;
  ${makeResponsive({
    beginAt: "tabletLandscape",
    style: `
      ${makeInset({ horizontal: 60 })};
      max-width: ${makeSize({ custom: 500 })};
    `,
  })}

  p {
    ${makeFont({
      fontSize: "h1",
      fontFamily: "Playfair Display",
    })}
  }
`;

export const AboutIntro: FC = () => {
  const { contentfulPageAbout: queryData } = useStaticQuery(graphql`
    {
      contentfulPageAbout {
        pageTitle
        introTitle {
          json
        }
        introImageAltText
        introImage {
          file {
            url
          }
        }
        introDescription {
          json
        }
      }
    }
  `);

  const [windowWidth, { tabletLandscape }] = useBreakpoints();

  return (
    <>
      <Section styleType="split">
        <StyledAboutTitleSection>
          <SectionCopy>
            <ContentfulRichText
              richText={queryData.introTitle.json}
              copy={{ fontSize: "md" }}
            />
          </SectionCopy>
        </StyledAboutTitleSection>
        <StyledAboutImageSection>
          <Image
            src={queryData.introImage.file.url}
            alt={queryData.introImageAltText}
            manualWidth="100%"
          />
        </StyledAboutImageSection>
      </Section>
      <Section
        styleType="blank"
        background={
          windowWidth < tabletLandscape
            ? { fixed: "light" }
            : { scalable: { color: "light", scale: 3 } }
        }
      >
        <SectionCopy>
          <ContentfulRichText
            richText={queryData.introDescription.json}
            copy={{ fontSize: "md" }}
          />
        </SectionCopy>
      </Section>
      <SectionSpacer />
    </>
  );
};
