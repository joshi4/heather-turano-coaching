import React, { FC } from "react";
import { Copy } from "../typography";

export const FormNotification: FC<{ type: "success" | "error" }> = ({
  children
}) => (
  <Copy type="text" fontColor={{ fixed: "light" }}>
    {children}
  </Copy>
);
