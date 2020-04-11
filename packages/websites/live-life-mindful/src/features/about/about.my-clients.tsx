import {
  Button,
  Image,
  Section,
  SectionCopy,
  SectionFooter,
  SectionSpacer,
  Title,
  makeFlex,
} from "@heather-turano-coaching/components";
import {
  makeInset,
  makeResponsive,
} from "@heather-turano-coaching/design-system/utils";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC, useMemo } from "react";
import styled from "styled-components";

import { ContentfulRichText } from "../../components";

const StyledAboutMyClientsImageSection = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-self: stretch;

  & > div {
    width: 33.333%;
    border: 1px solid #ccc;
    ${makeFlex("row", "center", "center")};
    overflow: hidden;

    & > .image {
      max-width: 100%;
      max-height: 100%;
      transform: scale(1.5);
    }

    img {
      object-fit: cover;
      object-position: center;
    }
  }
`;

const StyledAboutMyClientsTitle = styled.div`
  ${makeInset({ horizontal: 40, vertical: 40 })};
  text-align: center;
  ${makeResponsive({
    beginAt: "tabletLandscape",
    style: `
      ${makeInset({ horizontal: 60, vertical: 60 })};
    `,
  })}
`;

export const AboutMyClients: FC = () => {
  const { contentfulPageAbout: queryData } = useStaticQuery(graphql`
    {
      contentfulPageAbout {
        myClientsTitle
        myClientsDescription {
          json
        }
        myClientsImages {
          file {
            url
          }
        }
      }
    }
  `);

  const clients = useMemo(
    () =>
      queryData.myClientsImages.map((clientImage: any) => (
        <div key={clientImage.title}>
          <Image
            src={clientImage.file.url}
            alt={clientImage.title}
            manualWidth="100%"
          />
        </div>
      )),
    [queryData.myClientsImages]
  );

  return (
    <>
      <SectionSpacer />
      <Section
        styleType="split"
        background={{ scalable: { color: "light", scale: 3 } }}
      >
        <StyledAboutMyClientsImageSection>
          {clients}
        </StyledAboutMyClientsImageSection>
        <StyledAboutMyClientsTitle>
          <Title size="lg">{queryData.myClientsTitle}</Title>
          <SectionCopy>
            <ContentfulRichText
              richText={queryData.myClientsDescription.json}
              copy={{ fontSize: "md" }}
            />
          </SectionCopy>
          <SectionFooter>
            <Button label="Become one of these amazing people" />
          </SectionFooter>
        </StyledAboutMyClientsTitle>
      </Section>
      <SectionSpacer />
    </>
  );
};
