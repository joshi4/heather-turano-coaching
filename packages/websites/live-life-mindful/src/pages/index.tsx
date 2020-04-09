import {
  Button,
  ButtonGroup,
  Copy,
  Heading,
  Hero,
  Section,
  SectionCopy,
  SectionFooter,
  Title,
} from "@heather-turano-coaching/components";
import { makeOutset } from "@heather-turano-coaching/design-system/utils";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

import { Layout, MetaData, PageContainer } from "../components";
import { FormQuickContact } from "../features/forms/FormQuickContact";

const StyledHeading = styled.div`
  h1 {
    line-height: 1.1;
    text-transform: uppercase;
    font-weight: 500;
  }

  h4 {
    ${makeOutset({ top: "xxs", bottom: "md" })};
    max-width: 50%;
  }
`;

// @ts-ignore
const Index = ({ data, location, pageContext }) => {
  const { contentfulPageHome: queryData } = useStaticQuery(graphql`
    {
      contentfulPageHome {
        page {
          title
        }
        # hero section
        heroTitle
        heroSubTitle
        heroImage {
          title
          file {
            url
          }
        }
        heroCtaButtonLabel
        heroCtaUrl
        # about section
        aboutTitle
        aboutDescription {
          content {
            content {
              value
            }
          }
        }
        aboutLearnMoreLinkUrl
        aboutLearnMoreLinkText
        aboutGoToServicesLinkUrl
        aboutGoToServicesLinkText
        # Services Section
        servicesTitle
        servicesDescription {
          servicesDescription
        }
        servicesLinkText
        servicesLinkUrl
        # Testimonials
        testimonialsTitle
        testimonialsListOfTestimonials {
          customerDescription
          customerLocation
          testimonialDescription {
            content {
              content {
                value
              }
            }
          }
        }
        # Contact
        contactTitle
        contactDescription {
          content {
            content {
              value
            }
          }
        }
        contactFormButtonLabel
      }
    }
  `);

  return (
    <Layout pageTitle={queryData.page[0].title}>
      <MetaData location={location} />
      <PageContainer>
        <Hero
          image={queryData.heroImage.file.url}
          alt={queryData.heroImage.title.split(" ").join("")}
          borderColor={{ fixed: "light" }}
          gradient={{ scalable: { color: "secondary" } }}
        >
          <Section styleType="hero">
            <StyledHeading>
              <Heading
                fontSize="h1"
                fontColor={{ fixed: "light" }}
                fontFamily="Montserrat"
                fontStyle="bold"
              >
                {queryData.heroTitle.split(" ").map((word: string) => (
                  <div>{word}</div>
                ))}
              </Heading>
              <Heading
                fontSize="h4"
                fontColor={{ fixed: "light" }}
                fontFamily="Muli"
              >
                {queryData.heroSubTitle}
              </Heading>
              <Button label={queryData.heroCtaButtonLabel} />
            </StyledHeading>
          </Section>
        </Hero>
        <Section styleType="blank">
          <Title size="lg">{queryData.aboutTitle}</Title>
          <SectionCopy>
            <Copy fontSize="md" type="text">
              {queryData.aboutDescription.content[0].content[0].value}
            </Copy>
          </SectionCopy>
          <SectionFooter>
            <ButtonGroup layout="inline" align="center">
              <Button
                label={queryData.aboutLearnMoreLinkText}
                styleType="primary"
              />
              <Button
                label={queryData.aboutGoToServicesLinkText}
                styleType="secondary"
              />
            </ButtonGroup>
          </SectionFooter>
        </Section>
        <Section styleType="layered">
          <Title size="lg">{queryData.servicesTitle}</Title>
          <SectionCopy>
            <Copy fontSize="md" type="text">
              {queryData.servicesDescription.servicesDescription}
            </Copy>
            <SectionFooter>
              <ButtonGroup layout="inline" align="center">
                <Button
                  label={queryData.servicesLinkText}
                  styleType="primary"
                />
              </ButtonGroup>
            </SectionFooter>
          </SectionCopy>
        </Section>
        <Section styleType="blank">
          <Title size="lg">{queryData.testimonialsTitle}</Title>
          <SectionCopy></SectionCopy>
        </Section>
        <Section styleType="layered">
          <Title size="lg">{queryData.contactTitle}</Title>
          <SectionCopy>
            <Copy fontSize="md" type="text">
              {queryData.contactDescription.content[0].content[0].value}
            </Copy>
          </SectionCopy>
          <SectionFooter>
            <div style={{ maxWidth: "70%", margin: "0 auto" }}>
              <FormQuickContact
                submitButtonLabel={queryData.contactFormButtonLabel}
                submitButtonColor="secondary"
              />
            </div>
          </SectionFooter>
        </Section>
      </PageContainer>
    </Layout>
  );
};

export default Index;
