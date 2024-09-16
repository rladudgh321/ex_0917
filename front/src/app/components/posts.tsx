import Link from "next/link";
import PostPage from "./post";
import { postsInterface } from "../resource/interface";

export default function PostsComponent({ post }: {post: postsInterface}) {
    return (
        <div className="">
            <Link href={`/posts/${post.idx}`}>
                <PostPage post={post} />
            </Link>
        </div>
    );
}