"use client"

import Header from '@/app/common/Header';
import TitleComponent from './Title';
import dynamic from 'next/dynamic';
import QuillEditor from './editor';
import { useRecoilState } from 'recoil';
import { categoryAtom, postsAtom } from '@/app/resource/recoil';

export default function AddPostPage() {
  // const QuillEditor = dynamic(() => import('./editor'), { 
  //   ssr: false,
  //   loading: () => <div>...loading</div>,
  // });
  const [categoryList, setCategoryList] = useRecoilState(categoryAtom);
  const [category, setCategory] = useRecoilState(postsAtom);
  
  return (
    <div>
      <Header />
      <TitleComponent categoryList={categoryList} category={category} setCategory={setCategory} />
      <QuillEditor />
    </div>
  );
}