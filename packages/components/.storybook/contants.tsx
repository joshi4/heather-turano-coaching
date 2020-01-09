import {
  BlogAuthor,
  BlogMetaInformation,
  BlogSocialOptions
} from "../src/blog/blog.types";
import { TagGroup } from "../src/tags";
import React, { FC } from "react";
import { Copy, Heading } from "../src/typography";
import { Image } from "../src/assets";

const img = require("./assets/stock/aquatic-plant-beautiful-bloom.jpg");

export const blogAuthor: BlogAuthor["author"] = {
  firstName: "heather",
  lastName: "turano",
  avatarImg: require("./assets/htc-avatar.jpg")
};

export const blogMeta: BlogMetaInformation["meta"] = {
  datePublished: "June 25th, 2019"
};

export const blogTags: TagGroup["tags"] = [
  {
    text: "properly",
    route: "/surprise"
  },
  {
    text: "donkey",
    route: "/long"
  },
  {
    text: "atom",
    route: "/four"
  },
  {
    text: "take",
    route: "/no"
  },
  {
    text: "talk",
    route: "/myself"
  },
  {
    text: "enough",
    route: "/article"
  },
  {
    text: "feathers",
    route: "/official"
  },
  {
    text: "root",
    route: "/board"
  },
  {
    text: "riding",
    route: "/vegetable"
  }
];

export const blogSocial: BlogSocialOptions["social"] = {
  facebook: "go-to-facebook-link",
  pinterest: "go-to-pinterest-link",
  twitter: "go-to-twitter-link",
  instagram: "go-to-instagram-link"
};

export const BlogContent: FC = () => (
  <>
    <Copy type="paragraph">
      Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.
      Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla
      vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus
      commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
      risus.
    </Copy>
    <Image src={img} alt="alt" manualWidth="100%" />
    <Copy type="paragraph">
      Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean
      lacinia bibendum nulla sed consectetur. Curabitur blandit tempus
      porttitor. Nulla vitae elit libero, a pharetra augue. Sed posuere
      consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi
      erat porttitor ligula, eget lacinia odio sem nec elit.
    </Copy>
    <Copy type="paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus,
      tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
      massa justo sit amet risus. Vestibulum id ligula porta felis euismod
      semper. Cras mattis consectetur purus sit amet fermentum.
    </Copy>
    <Heading fontSize="h2">
      Egestas Vestibulum Ridiculus Pellentesque Amet Quam Cursus Elit
    </Heading>
    <Copy type="paragraph">
      Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris
      condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae
      elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare
      vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non
      magna. Maecenas sed diam eget risus varius blandit sit amet non magna.
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
    </Copy>
    <Copy type="paragraph">
      Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla
      non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus
      posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia
      quam venenatis vestibulum.
    </Copy>
  </>
);
