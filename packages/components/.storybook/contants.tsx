import React, { FC } from "react";

import { Image } from "../src/assets";
import {
  BlogAuthor,
  BlogMetaInformation,
  BlogSocialOptions,
} from "../src/blog/blog.types";
import { TagGroupProps } from "../src/tags";
import { Heading, Typography } from "../src/typography";

const img = require("./assets/stock/aquatic-plant-beautiful-bloom.jpg");

export const blogAuthor: BlogAuthor = {
  authorName: "heather turano",
  avatarImg: require("./assets/htc-avatar.jpg"),
};

export const blogMeta: BlogMetaInformation = {
  datePublished: "June 25th, 2019",
};

export const blogTags: TagGroupProps["tags"] = [
  {
    text: "properly",
  },
  {
    text: "donkey",
  },
  {
    text: "atom",
  },
  {
    text: "take",
  },
  {
    text: "talk",
  },
  {
    text: "enough",
  },
  {
    text: "feathers",
  },
  {
    text: "root",
  },
  {
    text: "riding",
  },
];

export const blogSocial: BlogSocialOptions["social"] = {
  facebook: "go-to-facebook-link",
  pinterest: "go-to-pinterest-link",
  twitter: "go-to-twitter-link",
  instagram: "go-to-instagram-link",
};

export const BlogContent: FC = () => (
  <>
    <Typography variant="paragraph">
      Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.
      Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla
      vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus
      commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
      risus.
    </Typography>
    <Image src={img} alt="alt" manualWidth="100%" />
    <Typography variant="paragraph">
      Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean
      lacinia bibendum nulla sed consectetur. Curabitur blandit tempus
      porttitor. Nulla vitae elit libero, a pharetra augue. Sed posuere
      consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi
      erat porttitor ligula, eget lacinia odio sem nec elit.
    </Typography>
    <Typography variant="paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus,
      tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
      massa justo sit amet risus. Vestibulum id ligula porta felis euismod
      semper. Cras mattis consectetur purus sit amet fermentum.
    </Typography>
    <Heading fontSize="h2">
      Egestas Vestibulum Ridiculus Pellentesque Amet Quam Cursus Elit
    </Heading>
    <Typography variant="paragraph">
      Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris
      condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae
      elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare
      vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non
      magna. Maecenas sed diam eget risus varius blandit sit amet non magna.
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
    </Typography>
    <Typography variant="paragraph">
      Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla
      non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus
      posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia
      quam venenatis vestibulum.
    </Typography>
  </>
);
