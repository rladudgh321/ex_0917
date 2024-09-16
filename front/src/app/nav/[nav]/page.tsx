"use client"

import Header from '@/app/common/Header';
import Nav from '@/app/common/Nav';
import PostPage from '@/app/components/post';
import { usePathname } from 'next/navigation'
 
export default function Page() {
  const pathname = usePathname();
  return (
    <div>
      <Header />
      <Nav />
      <div>pathname: {pathname}</div>
    </div>
  );
}