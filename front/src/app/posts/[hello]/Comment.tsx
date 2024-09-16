"use client"

import { postsInterface } from "@/app/resource/interface";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  comment: string,
};

export default function CommentComponent({params, post}: {params: string, post: postsInterface[]}) {
  const posts = post.filter((v) => v.idx === params);
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <div className="max-w-[768px] text-left mx-auto my-10 text-2xl">
      <div>{posts[0].Comment.length}개의 댓글이 있어요</div>
      <div className="border border-slate-300 p-4">
        {
          posts[0].Comment.map((v) => {
            return (
              <div key={params}>
                <div className="flex items-center gap-x-4 p-4">
                <div>
                  <img className="w-10 h-10 rounded-full" src={v.User.profile} alt="profile" />
                </div>
                <div>{v.User.name}</div>
                <div>2024. 2. 27.</div>
              </div>
              <hr />
              <div className="my-5 p-5">
                {v.content}
              </div>
              <div className="flex gap-x-4">
                <div>a</div>
                <div>b</div>
                <div>c</div>
              </div>
              <hr />
              </div>
            );
          })
        }

      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="border border-slate-300 my-10">
        <textarea placeholder="로그인하고 댓글 작성하기" className="p-5 w-full" {...register("comment")} />
        <div>
          <button type="submit" className="border border-slate-300 p-5 float-right mt-2">작성하기</button>
        </div>
      </form>

    </div>
  );
}