"use client"

import Header from "@/app/common/Header";
import Title from "./Title";
import RealteComponent from "./Relate";
import CommentComponent from "./Comment";
import ContentComponent from "./Content";
import FooterPage from "@/app/common/Footer";
import { useRecoilValue } from "recoil";
import { postsAtom } from "@/app/resource/recoil";


export default function HelloPage({ params }: { params: { hello: string } } ) {
  const posts = useRecoilValue(postsAtom);
  return (
    <div>
      <Header />
      {
        posts.map((v) => {
          if(v.idx === params.hello) {
            return (
              <div key={v.idx}>
                <Title title={v.title} image={v.image} category={v.category} />
                <ContentComponent content={v.content} />
                <RealteComponent post={posts} params={params.hello} category={v.category} />
                <CommentComponent post={posts} params={params.hello} />
              </div>
            );
          } else {
            return null; //404 페이지 만들기
          }
        })
      }
      <div className="mt-40">
      <FooterPage />
      </div>
    </div>
  );
}