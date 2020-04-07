import React from "react";
import Recaptcha from "react-google-recaptcha";
import InputControl from "../InputControl";

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

const InputCaptcha = () => (
  <InputControl>
    <Recaptcha sitekey={RECAPTCHA_KEY} />
  </InputControl>
);

export default InputCaptcha;
