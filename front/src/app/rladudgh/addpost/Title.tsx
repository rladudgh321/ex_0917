import { ChangeEvent, ChangeEventHandler } from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { SlCloudUpload } from "react-icons/sl";
import { postsInterface } from "@/app/resource/interface";
import { TbCategoryPlus } from "react-icons/tb";
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { GetTimeDiff } from "@/app/components/date";
import duration from 'dayjs/plugin/duration'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  category_type: string
  exampleRequired: string
}
dayjs.extend(duration);
dayjs.locale('ko');

export default function TitleComponent({categoryList, category, setCategory}: { categoryList: string[], category: postsInterface[], setCategory: any }) {
  console.log('category', categoryList);
  const today = dayjs();
  const duration = dayjs.duration(today.diff(dayjs('2024-07-10')));
  console.log('duration', duration.format('D'));
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  console.log(watch("example"));
  return (
    <div className="max-w-[768px] text-center mx-auto mt-10">
      <div className="">
        <h2 className="blog-title">글쓰기</h2>
      </div>
      <div className="flex items-center gap-4 my-4">
        <div className="blog-date">{dayjs(Date.now()).format('YYYY/MM/DD')}</div>
        <div className="blog-date">
        <select {...register("category_type")}>
            {categoryList.map((v: string) => {
              return (
                <option key={v} value={v}>{v}</option>
              );
            })}
          </select>
        </div>
        {/* const timeDiffDuration: Duration = dayjs.duration(dayjs().diff(timeToCompare)) */}
        {/* <GetTimeDiff timeToCompare={dayjs()} /> */}
        <div className="blog-date"><GetTimeDiff timeToCompare={dayjs()} /></div>
      </div>
      <div className="flex justify-center">
        <SlCloudUpload className="w-[400px] h-[400px] text-blue-400 cursor-pointer" />
      </div>
    </div>
  );
}