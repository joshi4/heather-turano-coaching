import React from "react";
import { NextPage } from "next";
import { getPosts } from "../api";
import { PostObject } from "@tryghost/content-api";

const Home: NextPage<PostObject> = ({ posts, meta }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
);

Home.getInitialProps = async (): Promise<PostObject> => {
  const { posts, meta } = await getPosts();
  return { posts, meta };
};

export default Home;
