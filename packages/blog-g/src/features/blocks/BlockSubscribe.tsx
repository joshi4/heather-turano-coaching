import React, { FC } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useStaticQuery, graphql } from "gatsby";

import {
  InputGroup,
  Input,
  Button,
  Copy,
  Heading
} from "@heather-turano-coaching/components";

import {
  LayoutBlockTitle,
  LayoutBlock,
  LayoutBlockContent
} from "../../components";

import {
  makeInset,
  makeColor,
  makeRhythm,
  makeSize
} from "@heather-turano-coaching/design-system/utils";
import {
  subscribeToBlog,
  SubscribeToBlogResponse,
  SubscribeToBlogRequest
} from "../../api";
import { useApi } from "@heather-turano-coaching/hooks";

interface BlockSubscribeProps {
  displayBlockTitle?: boolean;
}
const StyledSubscribeContnet = styled.div`
  ${makeInset({ horizontal: 32, vertical: 32 })};
  background: ${makeColor({ fixed: "dark" })};

  & > * {
    max-width: ${makeSize({ custom: 400 })};
    margin: 0 auto;
  }
`;

const StyledContentCopy = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    text-align: center;
  }

  p {
    ${makeRhythm({ fontSize: "sm", bottom: 2, top: 1 })};
  }
`;

export const BlockSubscribe: FC<BlockSubscribeProps> = ({
  displayBlockTitle = true
}) => {
  const { contentfulBlockSubscribe: queryData } = useStaticQuery(graphql`
    {
      contentfulBlockSubscribe {
        ...BlockSubscribeFields
      }
    }
  `);

  const { register, errors, handleSubmit } = useForm<SubscribeToBlogRequest>();

  const [{ loading, data, error }, subcribe] = useApi<
    SubscribeToBlogRequest,
    SubscribeToBlogResponse
  >(subscribeToBlog);

  const onSubmit = async (formData: SubscribeToBlogRequest) => {
    subcribe(formData);
  };

  return (
    <LayoutBlock>
      {displayBlockTitle && <LayoutBlockTitle title={queryData.block.title} />}
      <LayoutBlockContent>
        <StyledSubscribeContnet>
          <StyledContentCopy>
            <Heading
              fontSize="h1"
              fontColor={{ fixed: "light" }}
              fontFamily="Covered By Your Grace"
            >
              {queryData.contentTitle}
            </Heading>
            <Copy type="text" fontColor={{ fixed: "light" }}>
              {queryData.description}
            </Copy>
          </StyledContentCopy>
          {error && (
            <Copy type="text" fontColor={{ fixed: "light" }}>
              Oh no, it didn't work.
            </Copy>
          )}
          {data && (
            <Copy type="text" fontColor={{ fixed: "light" }}>
              Horay! Welcome to the list
            </Copy>
          )}
          {!data && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputGroup layout="stacked">
                <Input
                  id="subscribe-first-name"
                  name="firstName"
                  placeholder={queryData.namePlaceholder}
                  ref={register({ required: true })}
                  disabled={loading}
                  errorMessage={
                    errors.firstName && "We need your first name at a minimum"
                  }
                />
                <Input
                  id="subscribe-email"
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
                  id="submit-subscription"
                  styleType="accent"
                  type="submit"
                  label={queryData.submitText}
                  disabled={!!errors.firstName || !!errors.address || loading}
                  loading={loading}
                  onSubmit={handleSubmit(onSubmit)}
                />
              </InputGroup>
            </form>
          )}
        </StyledSubscribeContnet>
      </LayoutBlockContent>
    </LayoutBlock>
  );
};
