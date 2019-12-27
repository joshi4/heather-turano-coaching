import React, { FC } from "react";

import { Title } from "../typography";

import {
  Color,
  Position
} from "@heather-turano-coaching/design-system/types/primitive";

import "./Section.module.scss";

export interface SectionProps {
  styleType: Color;
  contentOrientation: Position;
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
      <Title size="lg">{title}</Title>
    </header>
    <article>
      <div styleName={contentOrientation}>{children}</div>
    </article>
  </section>
);
