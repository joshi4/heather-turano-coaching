import React from "react";
import Recaptcha from "react-google-recaptcha";
import { Control } from "./base/Control";

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY as string;

const ReCaptcha = () => (
  <Control>
    <Recaptcha sitekey={RECAPTCHA_KEY} />
  </Control>
);

export default ReCaptcha;
