import React, { FC } from "react";
import { Layout } from "@heather-turano-coaching/design-system/types/primitive";

import "./InputGroup.module.scss";

export const InputGroup: FC<{ layout?: Layout }> = ({
  layout = "stacked",
  children
}) => <div styleName={`group ${layout}`}>{children}</div>;
