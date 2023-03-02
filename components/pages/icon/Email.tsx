import cn from "classnames";
import { SvgIconProps } from "./type";

export default function EmailIcon(props: SvgIconProps) {
  const classNames = cn(
    "h-6 w-6 fill-current text-gray-700 dark:text-gray-200",
    props.className
  );
  return (
    <svg
      className={classNames}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3924"
    >
      <path
        d="M513 583.8l448.5-448.5c-11.6-4.7-24.3-7.3-37.5-7.3H100c-12.7 0-24.9 2.4-36.1 6.7L513 583.8z"
        fill=""
        p-id="11209"
      ></path>
      <path
        d="M513 674.3L14.6 175.9C5.3 191.1 0 208.9 0 228v568c0 55.2 44.8 100 100 100h824c55.2 0 100-44.8 100-100V228c0-18.5-5.1-35.9-13.9-50.8L513 674.3z"
        fill=""
        p-id="11210"
      ></path>
    </svg>
  );
}
