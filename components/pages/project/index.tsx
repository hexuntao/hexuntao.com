import Image from "next/image";
import { FadeIn } from "../home-shared/FadeIn";

export default function ProjectPage() {
  const arr = [
    {
      title: "Hexuntao (本站)",
      desc: "基于 TS + Nextra + Tailwindcss + framer-motion 构建的个人站点。",
      source: "https://github.com/hexuntao/hexuntao.com",
      link: "https://hexuntao.com",
    },
    {
      title: "Hexuntao API服务",
      desc: "基于 TS + Nest + MongoDB + Redis 构建 RESTful API 服务。(服务于本站)",
      source: "https://github.com/hexuntao/api.hexuntao.com",
      link: "https://api.hexuntao.com",
    },
    {
      title: "Hexuntao 后台管理",
      desc: "基于 TS + React + AntdDesign 构建后台管理系统。(管理本站所有数据)",
      source: "https://github.com/hexuntao/admin.hexuntao.com",
      link: "https://admin.hexuntao.com",
    },
    {
      title: "TChatBot",
      desc: "基于openai chatGPT api 实现 仿 chatGPT 页面聊天功能。",
      source: "https://github.com/hexuntao/TChatBot",
      link: "https://tchat.hexuntao.com",
    },
  ];
  return (
    <main className="relative py-6">
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-6 ">
        {arr.map((item, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="box-border relative flex flex-col gap-5 p-4 overflow-hidden text-black no-underline border dark:text-white rounded-xl dark:border-neutral-800">
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="block w-full"
              >
                <Image
                  alt="a"
                  width={500}
                  height={400}
                  src="/static/project/1.png"
                  className="rounded-lg"
                />
              </a>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="m-0 font-bold leading-5 text-gray-900 font-space-grotesk dark:text-white"
                  >
                    {item.title}
                  </a>
                  <a
                    className="px-3 py-1 text-sm rounded-3xl bg-slate-100 dark:bg-slate-600 dark:text-white"
                    href={item.source}
                    target="_blank"
                    rel="noreferrer"
                  >
                    CODE
                  </a>
                </div>
                <p className="h-16 m-0 overflow-hidden text-sm overflow-ellipsis opacity-70">
                  {item.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </main>
  );
}
