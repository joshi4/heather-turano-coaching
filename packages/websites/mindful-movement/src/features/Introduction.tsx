import {} from "graphql";

import {
  Heading,
  Section,
  Typography,
} from "@heather-turano-coaching/components";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";

export const Introduction: FC = () => {
  const { contentfulPageHome } = useStaticQuery<{
    contentfulPageHome: {
      introductionTitle: string;
      introductionDescription: { introductionDescription: string };
    };
  }>(graphql`
    {
      contentfulPageHome {
        introductionTitle
        introductionDescription {
          introductionDescription
        }
      }
    }
  `);

  return (
    <Section styleType="blank">
      <Heading fontSize="h1" fontFamily="Playfair Display">
        {contentfulPageHome.introductionTitle}
      </Heading>
      <br />
      <Typography variant="paragraph" fontSize="md">
        {contentfulPageHome.introductionDescription.introductionDescription}
      </Typography>
    </Section>
  );
};
