"use client"

import Link from "next/link";
import Header from "./common/Header";
import Nav from "./common/Nav";
import PostPage from "./components/post";
import Highlight from "./components/Highlight";
import FooterPage from "./common/Footer";
import PagenationComponent from "./components/Pagenation";
import PostsComponent from "./components/posts";
import { useRecoilValue } from "recoil";
import { postsAtom } from "./resource/recoil";

export default function Home() {
  const posts = useRecoilValue(postsAtom);
  return (
    <div>
      <Header />
      <hr />
      <Nav />
      <Highlight />
      <br />
      <hr />
      {
        posts.map((v) => {
          return (
            <div key={v.idx} className="grid mx-auto md:grid-cols-[500px,500px] justify-center">
              <PostsComponent post={v} />
            </div>
          )
        })
      }
      <PagenationComponent />
      <FooterPage />
    </div>
  );
}
