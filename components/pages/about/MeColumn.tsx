import ColumnBox from "./ColumnBox";

export default function MeColumn() {
  return (
    <ColumnBox header="关于我的">
      <div className="text-left text-[20px] flex flex-col gap-6 w-10/12">
        <p>Hi! 我是 Hexuntao， 一名专注于 Node 全栈开发 的 90 后。</p>
        <p>
          涉及电商、教育、金融等行业，熟悉微信生态业务，丰富的跨平台开发经验。
        </p>
        <p>
          目前主要技术栈
          <b className="font-bold">TS/JS</b>、
          <b className="font-bold">NestJs</b>、
          <b className="font-bold">ReactJs</b>、
          <b className="font-bold">VueJs</b>、
          <b className="font-bold">NextJs</b>、
          <b className="font-bold">小程序开发</b>、
          <b className="font-bold">React Native</b>、
          <b className="font-bold">Nginx</b>、
          <b className="font-bold">TypeORM</b>
        </p>
        <p>
          未来打算学习
          <b className="font-bold">Web3</b>、
          <b className="font-bold">Blockchain</b>、
          <b className="font-bold">Solidity</b>、
          <b className="font-bold">DApp</b>
        </p>
      </div>
    </ColumnBox>
  );
}
