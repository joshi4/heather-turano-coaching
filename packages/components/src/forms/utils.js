import InputText from "./InputText";
import InputTextarea from "../../src";
import InputError from "./InputError";
import InputLabel from "./InputLabel";

export const inputComponentMap = {
  // helpers
  label: InputLabel,
  error: InputError,
  // types
  text: InputText,
  textarea: InputTextarea,
  email: InputText
};
