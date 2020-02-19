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

export const BlockSubscribe: FC<BlockSubscribeProps> = ({
  subscribe,
  displayBlockTitle = true
}) => {
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
                  placeholder="First name"
                  ref={register({ required: true })}
                  disabled={loading}
                  errorMessage={
                    errors.firstName && "We need your first name at a minimum"
                  }
                />
                <Input
                  id="subscribe-last-name"
                  name="lastName"
                  placeholder="Last name (optional)"
                  ref={register()}
                  disabled={loading}
                />
                <Input
                  id="subscribe-email"
                  name="address"
                  placeholder={subscribe.fields.content.fields.emailPlaceholder}
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
                  label={subscribe.fields.content.fields.submitText}
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
