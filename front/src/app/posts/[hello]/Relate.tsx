import { postsInterface } from "@/app/resource/interface";
import Link from "next/link";

export default function RelateComponent({params, post, category}:{params: string, post: postsInterface[], category: string}) {
  const posts = post.filter((post) => post.category === category && post.idx !== params);
  const postsCount = posts.length;
  return (
    <div className="max-w-[768px] text-left mx-auto my-10 text-2xl">
      {postsCount ? <div>관련 포스트가 {postsCount}개가 더 있어요</div>: null}
    {
      posts.map((v) => {
        return (
          <div key={v.idx}>
            <div className="flex gap-x-4 items-center p-4">
              <Link href={`/posts/${v.idx}`}><img src={v.image} alt={v.image} className="w-24 h-24" /></Link>
              <Link href={`/posts/${v.idx}`}><div>{v.title}</div></Link>
              <div>2024.09.04.</div>
            </div>
            <hr />
          </div>
        );
      })
    }
    </div>
  );
}