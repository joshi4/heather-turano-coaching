import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { useStaticQuery, graphql } from "gatsby";

import {
  InputGroup,
  Input,
  Button,
  Copy
} from "@heather-turano-coaching/components";

import {
  subscribeToBlog,
  SubscribeToBlogResponse,
  SubscribeToBlogRequest
} from "../../api";
import { useApi } from "@heather-turano-coaching/hooks";

interface FormSubscribeProps {
  fieldPrefix: string;
}

export const FormSubscribe: FC<FormSubscribeProps> = ({ fieldPrefix }) => {
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
    <>
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
              id={`${fieldPrefix}-subscribe-first-name`}
              name="firstName"
              placeholder={queryData.namePlaceholder}
              ref={register({ required: true })}
              disabled={loading}
              errorMessage={
                errors.firstName && "We need your first name at a minimum"
              }
            />
            <Input
              id={`${fieldPrefix}-subscribe-email`}
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
              id={`${fieldPrefix}-submit-subscription`}
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
    </>
  );
};
