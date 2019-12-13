import React, { FC } from "react";

import { Primitive } from "@heather-turano-coaching/design-system";

import { Title } from "../typography";

import "./Section.module.scss";

export interface SectionProps {
  styleType: Primitive.Color;
  contentOrientation: Primitive.Position;
  title: string;
}

export const Section: FC<SectionProps> = ({
  styleType,
  title,
  children,
  contentOrientation
}) => (
  <section styleName={`section ${styleType}`}>
    <header>
      <Title size="h3">{title}</Title>
    </header>
    <article>
      <div styleName={contentOrientation}>{children}</div>
    </article>
  </section>
);
