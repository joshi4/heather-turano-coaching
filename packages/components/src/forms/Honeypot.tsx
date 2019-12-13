import React, { FC } from "react";

export const InputHoneypot: FC<{ botFieldName?: string }> = ({
  botFieldName = "bot-field"
}) => (
  <p style={{ display: "none" }}>
    <label htmlFor={botFieldName}>
      Don’t fill this out if you&apos;re human:{" "}
      <input id={botFieldName} name={botFieldName} />
    </label>
  </p>
);
