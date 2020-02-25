import React from "react";
import { useForm } from "react-hook-form";
import { useStaticQuery, graphql } from "gatsby";

import {
  SubscribeRequest,
  SubscribeResponse
} from "@heather-turano-coaching/domain";

import {
  Heading,
  Copy,
  FormContainer,
  FormNotification,
  InputGroup,
  Input,
  Button,
  Image,
  Section
} from "@heather-turano-coaching/components";
import { useApi } from "@heather-turano-coaching/hooks";

import { Layout, SEO } from "../components";
import { subscribeToBlog } from "../api";
import styled from "styled-components";
import {
  makeOutset,
  makeSize,
  makeColor,
  makeRhythm,
  makeResponsive
} from "@heather-turano-coaching/design-system/utils";

const StyledFormConatiner = styled.div`
  ${makeOutset({ horizontal: 24 })};
  top: -${makeSize({ custom: 32 })};
  position: relative;
  box-shadow: 0 0 8px 0 rgba(69, 162, 153, 0.5);
  text-align: center;
  border-radius: ${makeSize({ custom: 8 })};
  overflow: hidden;

  ${makeResponsive({
    beginAt: "laptop",
    style: `
      ${makeOutset({ horizontal: 120 })};
    `
  })}

  ${makeResponsive({
    beginAt: "desktop",
    style: `
      ${makeOutset({ horizontal: 200 })};
    `
  })}

  & > * {
    background: ${makeColor({ fixed: "light" })};
  }

  h1 {
    & + p {
      ${makeRhythm({ fontSize: "sm", top: 1, bottom: 2 })}
    }
  }
`;

const IndexPage = () => {
  const { contentful100Days: queryData } = useStaticQuery(graphql`
    {
      contentful100Days {
        heroImage {
          file {
            url
          }
        }
        title
        description
        namePlaceholder
        emailPlaceholder
        submitText
      }
    }
  `);

  const { register, errors, handleSubmit } = useForm<SubscribeRequest>();

  const [{ loading, data, error }, subcribe] = useApi<
    SubscribeRequest,
    SubscribeResponse
  >(subscribeToBlog);

  const onSubmit = async (formData: SubscribeRequest) => {
    subcribe(formData);
  };

  return (
    <Layout>
      <SEO title="Home" description="home page for 100 days" />
      <Image src={queryData.heroImage.file.url} alt="hero" manualWidth="100%" />
      <StyledFormConatiner>
        <Section styleType="blank">
          {/* <Image /> */}
          <Heading
            fontSize="h1"
            fontColor={{ scalable: { color: "secondary" } }}
            fontFamily="Covered By Your Grace"
          >
            {queryData.title}
          </Heading>
          <Copy>{queryData.description}</Copy>
          <FormContainer>
            {error && (
              <FormNotification type="error">
                {`Oh no! It looks like something went wrong. Error: "${error.errorMessage}". If this is something that seems tough to fix, reach out to Heater at heather@livelifemindful.com`}
              </FormNotification>
            )}
            {data && (
              <FormNotification type="success">
                Horay! Thanks for signing up! You'll receive an welcome email at
                the email address you provided.
              </FormNotification>
            )}
            {!data && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup layout="stacked">
                  <Input
                    id={`subscribe-first-name`}
                    name="firstName"
                    placeholder={queryData.namePlaceholder}
                    ref={register({ required: true })}
                    disabled={loading}
                    errorMessage={
                      errors.firstName && "We need your first name at a minimum"
                    }
                  />
                  <Input
                    id={`subscribe-email`}
                    name="address"
                    placeholder={queryData.emailPlaceholder}
                    ref={register({ required: true })}
                    disabled={loading}
                    errorMessage={
                      errors.address &&
                      "You'll need to add your email address so we can send you awesome stuff!"
                    }
                  />
                  <Button
                    id={`submit-subscription`}
                    styleType="secondary"
                    type="submit"
                    label={queryData.submitText}
                    disabled={!!errors.firstName || !!errors.address || loading}
                    loading={loading}
                    onSubmit={handleSubmit(onSubmit)}
                  />
                </InputGroup>
              </form>
            )}
          </FormContainer>
        </Section>
      </StyledFormConatiner>
    </Layout>
  );
};

export default IndexPage;
