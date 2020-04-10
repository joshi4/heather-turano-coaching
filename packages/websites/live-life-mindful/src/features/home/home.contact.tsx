import {
  Copy,
  Section,
  SectionCopy,
  SectionFooter,
  Title,
} from "@heather-turano-coaching/components";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { FormQuickContact } from "../forms/FormQuickContact";

export const HomeContact = () => {
  const { contentfulPageHome: queryData } = useStaticQuery(graphql`
    {
      contentfulPageHome {
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
  );
};
