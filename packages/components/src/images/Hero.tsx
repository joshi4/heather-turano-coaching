import React, { FC } from "react";

import { HeroImage } from "./HeroImage";
import { Heading, Copy } from "../typography";

import "./Hero.module.scss";

export interface HeroProps {
  image: string;
  alt: string;
  title: string;
  subTitle: string;
}

export const Hero: FC<HeroProps> = ({
  image,
  alt,
  title,
  subTitle,
  children
}) => (
  <section styleName="hero">
    <HeroImage image={image} alt={alt} />
    <div styleName="top">
      <div>
        <Heading
          fontSize="h2"
          copy={`'${title}'`}
          fontColor={{ type: "scalable", color: "lightscale" }}
        />
        <div styleName="block sm">
          <Copy
            type="paragraph"
            fontSize={{ size: "xl" }}
            fontColor={{ type: "scalable", color: "lightscale" }}
          >
            {subTitle}
          </Copy>
        </div>
      </div>
      <div styleName="block lg">{children}</div>
    </div>
  </section>
);
