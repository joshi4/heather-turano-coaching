import React from "react";

import { Layout } from "../../components-gatsby";

import { Text } from "../../components/typography";

import { Section } from "../../components-app/layouts";

const SignUpSuccess = () => (
  <Layout>
    <div style={{ marginTop: "50px" }} />
    <Section title="Thanks for joining!" styleType="alt">
      <Text size="lg">
        You successully signed up as an Honest Heather insider!
      </Text>
    </Section>
  </Layout>
);

export default SignUpSuccess;
