import React, { FC } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import {
  InputGroup,
  Input,
  Button,
  Copy,
  Heading
} from "@heather-turano-coaching/components";

import { LayoutBlockTitle, LayoutBlock, LayoutBlockContent } from "../layout";

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
  subscribe: any;
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

interface FormData {
  firstName: string;
  emailAddress: string;
}

export const BlockSubscribe: FC<BlockSubscribeProps> = ({
  subscribe,
  displayBlockTitle = true
}) => {
  const { register, errors, handleSubmit } = useForm<FormData>();

  const [{ loading, data, error }, subcribe] = useApi<
    SubscribeToBlogRequest,
    SubscribeToBlogResponse
  >(subscribeToBlog);

  const onSubmit = async (formData: FormData) => {
    console.log(formData);
    subcribe(formData);
  };

  console.log(loading, data, error);

  return (
    <LayoutBlock>
      {displayBlockTitle && <LayoutBlockTitle title={subscribe.fields.title} />}
      <LayoutBlockContent>
        <StyledSubscribeContnet>
          <StyledContentCopy>
            <Heading
              fontSize="h1"
              fontColor={{ fixed: "light" }}
              fontFamily="Covered By Your Grace"
            >
              {subscribe.fields.content.fields.contentTitle}
            </Heading>
            <Copy type="text" fontColor={{ fixed: "light" }}>
              {subscribe.fields.content.fields.description}
            </Copy>
          </StyledContentCopy>
          {error && (
            <Copy type="text" fontColor={{ fixed: "light" }}>
              Oh no, it didn't work.
            </Copy>
          )}
          {!data && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputGroup layout="stacked">
                <Input
                  id="subscribe-name"
                  name="firstName"
                  placeholder={subscribe.fields.content.fields.namePlaceholder}
                  ref={register({ required: true })}
                  disabled={loading}
                  errorMessage={
                    errors.firstName &&
                    "This is field required. Feel free to only put your first name"
                  }
                />
                <Input
                  id="subscribe-email"
                  name="emailAddress"
                  placeholder={subscribe.fields.content.fields.emailPlaceholder}
                  ref={register({ required: true })}
                  disabled={loading}
                  errorMessage={
                    errors.emailAddress && "This is also a required fied"
                  }
                />
                <Button
                  id="submit-subscription"
                  styleType="accent"
                  type="submit"
                  label={subscribe.fields.content.fields.submitText}
                  disabled={
                    !!errors.firstName || !!errors.emailAddress || loading
                  }
                  loading={loading}
                  onSubmit={handleSubmit(onSubmit)}
                />
              </InputGroup>
            </form>
          )}
          {data && (
            <Copy type="text" fontColor={{ fixed: "light" }}>
              Horay! Welcome to the list
            </Copy>
          )}
        </StyledSubscribeContnet>
      </LayoutBlockContent>
    </LayoutBlock>
  );
};
