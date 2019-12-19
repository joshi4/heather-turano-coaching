import { SimpleInterpolation, css } from "styled-components";

type ResetElements = "heading" | "list" | "button" | "input";

type Resets = { [key in ResetElements]: SimpleInterpolation };

/**
 * @todo Find a way to make this library agnostic
 * remove the simple interpolation
 */
const resets: Resets = {
  heading: css`
    h1,
    h2,
    h3,
    h4,
    h5 {
      margin: 0;
    }
  `,
  list: css`
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
  `,
  button: css`
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
  `,
  input: css`
    margin: 0;
    padding: 0;
    border: 0;
  `
};

export const reset = (element: ResetElements): Resets[typeof element] =>
  resets[element];
