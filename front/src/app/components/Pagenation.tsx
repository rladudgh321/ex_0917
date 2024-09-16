import Link from "next/link";

export default function PagenationComponent() {
  return (
    <div className="flex justify-center gap-x-5">
      <Link href="/1" className="border border-slate-300 rounded-full w-7 text-center">1</Link>
      <Link href="/2" className="border border-slate-300 rounded-full w-7 text-center">2</Link>
      <Link href="/3" className="border border-slate-300 rounded-full w-7 text-center">3</Link>
      <Link href="/4" className="border border-slate-300 rounded-full w-7 text-center">4</Link>
      <Link href="/5" className="border border-slate-300 rounded-full w-7 text-center">5</Link>
    </div>
  );
}