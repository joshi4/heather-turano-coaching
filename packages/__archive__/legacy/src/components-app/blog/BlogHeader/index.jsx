import React from "react";
import PropTypes from "prop-types";

import {
  Heading,
  Icon,
  Label,
  Paragraph
} from "../../../components/typography";
import { Link } from "../../../components/links";

import "./index.module.scss";

const BlogHeader = ({
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
          <Icon icon="long-arrow-left" size="md" color="accent-0" />
          <Label size="md" color="accent-0">
            {backLinkText}
          </Label>
        </Link>
      </div>
      <div styleName="date">
        <div>
          <Paragraph size="md" color="grayscale-3">
            <span>{dateCreated}</span>
            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          </Paragraph>
        </div>
        <div>
          <Paragraph size="md" color="secondary-0">
            <span>Written by {author}</span>
          </Paragraph>
        </div>
      </div>
      <Heading size="xl">{title}</Heading>
      {description ? (
        <div styleName="description">
          <Paragraph size="h6">{description}</Paragraph>
        </div>
      ) : null}
    </div>
  </header>
);

BlogHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  backLinkRoute: PropTypes.string.isRequired,
  backLinkText: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

BlogHeader.defaultProps = {
  description: null
};

export default BlogHeader;
