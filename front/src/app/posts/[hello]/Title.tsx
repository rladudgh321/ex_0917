
export default function TitleComponent({title, image, category}: {title: string, image: string, category: string}) {
  return (
    <div className="max-w-[768px] text-center mx-auto">
      <div className="">
        <h2 className="blog-title">{title}</h2>
      </div>
      <div className="flex my-4 gap-4 items-center">
        <div className="blog-date">2022/09/18</div>
        <div className="blog-date">{ category }</div>
        <div>3 min read</div>
      </div>
      <div>
        <img src={image} alt="사진" />
      </div>
    </div>
  );
}