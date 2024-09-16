export default function ContentComponent({content}: {content: string}) {
  return (
    <div className="max-w-[768px] text-left mx-auto my-10 text-2xl">
      {content}
    </div>
  );
}