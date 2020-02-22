import React from "react";
import PropTypes from "prop-types";

import { Icon, Label } from "../../typography";

import "./index.module.scss";

export const ButtonAction = ({ label, size, disabled, onClick, icon }) => (
  <button styleName="link" type="button" disabled={disabled} onClick={onClick}>
    {icon && (
      <Icon icon={icon} size={size === "sm" ? "sm" : "md"} styleType="inline" />
    )}
    <Label size={size === "sm" ? "sm" : "md"}>{label}</Label>
  </button>
);

ButtonAction.propTypes = {
  /**
   * the button text
   */
  label: PropTypes.string.isRequired,
  /**
   * the type of button style that should be applied
   */
  size: PropTypes.oneOf(["sm", "md"]),
  /**
   * the action that is fired after the user clicks the button
   */
  onClick: PropTypes.func,
  /**
   * a truthy value disables the button and the user can no longer click on it
   */
  disabled: PropTypes.bool,
  /**
   * The font-awesome string icon that should be included with
   */
  icon: PropTypes.string
};

ButtonAction.defaultProps = {
  size: "sm",
  disabled: false,
  onClick: null,
  icon: null
};

export default ButtonAction;
