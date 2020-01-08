import React, { FC } from "react";

import { Title, Copy } from "../typography";

import "./BlogCard.module.scss";

export interface BlogCard {
  title: string;
  dateCreated: string;
  prompt: string;
  thumbnail: string;
  thumbnailAlt: string;
  category: string;
}

const BlogCard: FC<BlogCard> = ({
  category,
  title,
  prompt,
  dateCreated,
  thumbnail,
  thumbnailAlt
}) => (
  <li styleName="container">
    <Title size="md">{category}</Title>
    <div styleName="post">
      <article styleName="img">
        <img src={thumbnail} alt={thumbnailAlt} />
      </article>
      <article styleName="summary">
        <header>
          <Copy type="label" fontSize="xl">
            {title}
          </Copy>
          <div styleName="date">
            <Copy
              type="caption"
              fontSize="sm"
              fontColor={{ scalable: { color: "gray" } }}
            >
              {dateCreated}
            </Copy>
          </div>
        </header>
        <div>
          <Copy type="paragraph" fontSize="md">
            {prompt}
          </Copy>
        </div>
      </article>
      {/* <ul styleName="quick-links">
        <li styleName="link secondary">
          <Icon icon="facebook" size="xs" color="lightscale-3" />
        </li>
        <li styleName="link primary">
          <Icon icon="pinterest" size="xs" color="lightscale-3" />
        </li>
        <li styleName="link accent">
          <Icon icon="instagram" size="xs" color="lightscale-3" />
        </li>
        <li styleName="link grayscale">
          <Icon icon="twitter" size="xs" color="lightscale-3" />
        </li>
      </ul> */}
    </div>
  </li>
);
