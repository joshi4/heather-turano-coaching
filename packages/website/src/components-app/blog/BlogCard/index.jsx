import React from "react";
import PropTypes from "prop-types";

import {
  Title,
  Label,
  Paragraph,
  Caption,
  Icon
} from "../../../components/typography";
import { Link } from "../../../components/links";

import "./index.module.scss";

const BlogCard = ({
  category,
  title,
  prompt,
  dateCreated,
  thumbnail,
  thumbnailAlt,
  blogLinkRoute
}) => (
  <li styleName="container">
    <Title size="sm">{category}</Title>
    <div styleName="post">
      <article styleName="img">
        <img src={thumbnail} alt={thumbnailAlt} />
      </article>
      <article styleName="summary">
        <header>
          <Label size="xl">{title}</Label>
          <div styleName="date">
            <Caption size="sm" color="grayscale-2">
              {dateCreated}
            </Caption>
          </div>
        </header>
        <div>
          <Paragraph size="md">{prompt}</Paragraph>
        </div>
        <Link to={blogLinkRoute}>
          <Label size="md" color="accent-0">
            Keep Reading
          </Label>
          <Icon icon="long-arrow-right" size="md" color="accent-0" />
        </Link>
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

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  prompt: PropTypes.string.isRequired,
  blogLinkRoute: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  thumbnailAlt: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default BlogCard;
