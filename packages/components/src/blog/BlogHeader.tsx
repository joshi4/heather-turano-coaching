import React, { FC } from "react";

import { Heading, Icon, Copy } from "../typography";
import { Link } from "../buttons-links";

import "./BlogHeader.module.scss";

export interface BlogHeaderProps {
  title: string;
  description?: string;
  backLinkRoute: string;
  backLinkText: string;
  dateCreated: string;
  author: string;
}

export const BlogHeader: FC<BlogHeaderProps> = ({
  title,
  description,
  backLinkRoute,
  backLinkText,
  dateCreated,
  author
}) => (
  <header>
    <div styleName="page-header">
      <div styleName="link">
        <Link to={backLinkRoute}>
          <Icon icon="long-arrow-left" size="md" color="accent" />
          <Copy type="label" size="md" color="accent">
            {backLinkText}
          </Copy>
        </Link>
      </div>
      <div styleName="date">
        <div>
          <Copy type="paragraph" size="md" color="grayscale">
            <span>{dateCreated}</span>
            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          </Copy>
        </div>
        <div>
          <Copy type="paragraph" size="md" color="secondary">
            <span>Written by {author}</span>
          </Copy>
        </div>
      </div>
      <Heading size="h2">{title}</Heading>
      {description ? (
        <div styleName="description">
          <Copy type="paragraph" size="xxl">
            {description}
          </Copy>
        </div>
      ) : null}
    </div>
  </header>
);
