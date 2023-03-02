import ColumnBox from "./ColumnBox";

export default function SiteColumn() {
  return (
    <ColumnBox header="关于网站">
      <div className="text-left text-[20px] flex flex-col gap-6 w-10/12">
        <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">
          创建这个网站初衷是为了记录作为一名程序员工作中学到的知识，固定对技术的理解，分享有用有趣的事情，后来也想着把增加多一个栏目，记录分享生活，后面也会继续完善丰富网站的内容。
        </p>
        <p className="font-bold mt-10">相关技术栈</p>
        <ul>
          <li className="nx-mt-6 nx-leading-7 first:nx-mt-0">
            前端：基于 <b className="font-bold">Typescript</b> +{" "}
            <b className="font-bold">NextJs</b> +{" "}
            <b className="font-bold">TailwindCSS</b> 构建现代 SSR 应用
          </li>
          <li className="nx-mt-6 nx-leading-7 first:nx-mt-0">
            服务端：基于 <b className="font-bold">Typescript</b> +{" "}
            <b className="font-bold">NestJs</b> +{" "}
            <b className="font-bold">Mongodb</b> +{" "}
            <b className="font-bold">Redis</b>
            构建高性能服务端应用
          </li>
          <li className="nx-mt-6 nx-leading-7 first:nx-mt-0">
            管理后台：基于 <b className="font-bold">Typescript</b> +{" "}
            <b className="font-bold">ReactJs</b> +{" "}
            <b className="font-bold">AndDesign</b> 构建 web 应用
          </li>
        </ul>
      </div>
    </ColumnBox>
  );
}
