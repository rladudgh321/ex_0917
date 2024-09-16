"use client"
import Link from "next/link";
import { postsInterface } from "../resource/interface";
import { useMemo } from "react";

export default function PostPage({post}: { post: postsInterface }) {
  const styleMemo = useMemo(() => ({
    width:'400px',height:'400px', borderRadius:'1.5rem', background:`center/cover url('${post.image}')`
  }),[post.image]);
  return (
    <div className="">
      <article className="m-5">
        <div className="relative rounded-3xl w-[400px] h-[400px]">
          <div style={styleMemo}>
            <div className="hover-info hover:bg-slate-900/60 text-white w-[400px] h-[400px] rounded-3xl">
              <div className="absolute right-0 p-5 opacity-0">화살표</div>
              <div className="absolute bottom-0 p-5 opacity-0">{post.title}</div>
            </div>
          </div>
          </div>
          <br />
          <div className="blog-date">2024/03/19</div>
          <br />
          <br />
        <h2 className="text-lg font-extrabold">{post.title}</h2>
      </article>
    </div>
  );
}