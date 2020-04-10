import {
  Button,
  ButtonGroup,
  Copy,
  Section,
  SectionCopy,
  SectionFooter,
  Title,
} from "@heather-turano-coaching/components";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export const HomeServices = () => {
  const { contentfulPageHome: queryData } = useStaticQuery(graphql`
    {
      contentfulPageHome {
        servicesTitle
        servicesDescription {
          servicesDescription
        }
        servicesLinkText
        servicesLinkUrl
      }
    }
  `);

  return (
    <Section styleType="layered">
      <Title size="lg">{queryData.servicesTitle}</Title>
      <SectionCopy>
        <Copy fontSize="md" type="text">
          {queryData.servicesDescription.servicesDescription}
        </Copy>
        <SectionFooter>
          <ButtonGroup layout="inline" align="center">
            <Button label={queryData.servicesLinkText} styleType="primary" />
          </ButtonGroup>
        </SectionFooter>
      </SectionCopy>
    </Section>
  );
};
