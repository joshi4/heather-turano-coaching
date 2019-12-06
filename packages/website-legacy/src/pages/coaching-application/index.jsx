import React from "react";

import { Layout } from "../../components-gatsby";

import { Text } from "../../components/typography";

import { Section } from "../../components-app/layouts";

const CoachingApplication = () => (
  <Layout>
    <div style={{ marginTop: "50px" }} />
    <Section title="Coaching Application" styleType="default">
      <Text size="lg">
        {
          "Welcome! Please fill out this form below and I'll be in touch as soon as possible to setup a 90-minute discover session!"
        }
      </Text>
      <Text size="lg">- Heather</Text>
    </Section>
  </Layout>
);

export default CoachingApplication;
