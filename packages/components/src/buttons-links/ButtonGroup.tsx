import React, { FC } from "react";

import { Layout } from "@heather-turano-coaching/design-system/types/primitive";

import "./ButtonGroup.module.scss";

export const ButtonGroup: FC<{ layout?: Layout }> = ({
  layout = "stacked",
  children
}) => <div styleName={`grouping ${layout}`}>{children}</div>;
