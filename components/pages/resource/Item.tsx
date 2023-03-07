import Image from "next/image";

export type ItemProps = {
  title: string;
  desc: string;
  logo: string;
  link: string;
};

export default function Item(props: ItemProps) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="flex items-center w-full max-w-sm p-4 mx-auto space-x-4 bg-white shadow-md rounded-xl"
    >
      <div className="flex-shrink-0">
        <img
          className="w-16 h-16 rounded"
          width={68}
          height={68}
          src={props.logo}
          alt={props.title}
        />
      </div>
      <div>
        <div className="overflow-hidden text-lg font-medium truncate nx-text-primary-600 ">
          {props.title}
        </div>
        <p className="h-10 overflow-hidden text-sm text-gray-500 overflow-ellipsis">
          {props.desc}
        </p>
      </div>
    </a>
  );
}
