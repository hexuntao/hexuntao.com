import { FadeIn } from "../home-shared/FadeIn";
import { Gradient } from "../home-shared/Gradient";
import ColumnBox from "./ColumnBox";

export default function FQAColumn() {
  return (
    <ColumnBox header="FAQ">
      <FadeIn noVertical className="relative flex justify-center w-full mt-16">
        <div className="text-left  flex flex-col gap-4 ">
          <p className="font-bold text-[20px]">网站是否盈利</p>
          <ul className="mb-4">
            <li className="nx-mt-6 nx-leading-7 first:nx-mt-0">
              网站暂时没有盈利目的
            </li>
          </ul>
          <p className="font-bold text-[20px]">网站是否盈利</p>
          <ul className="mb-4">
            <li className="nx-mt-6 nx-leading-7 first:nx-mt-0">
              大部分文章是原创，有些是转载、衍生类型
            </li>
          </ul>

          <p className="font-bold text-[20px]">可以复制该网站吗</p>
          <ul className="mb-4">
            <li className="nx-mt-6 nx-leading-7 first:nx-mt-0">
              网站程序为开源共享，遵循协议的情况下自由下载，部署
            </li>
          </ul>

          <p className="font-bold text-[20px]">想了解站长</p>
          <ul className="mb-4">
            <li className="nx-mt-6 nx-leading-7 first:nx-mt-0">
              不要了解，会浪费你的时间，但可以留言，评论文章
            </li>
          </ul>
        </div>
        <Gradient
          width={1200}
          height={300}
          className="bottom-[-200px] -z-10 opacity-20"
          conic
        />
      </FadeIn>
    </ColumnBox>
  );
}
