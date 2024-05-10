import Link from "next/link";

function Icon(props) {
  return (
    <Link href={props.href} target="_blank">
      <i
        className={`uil uil-${props.icon} text-[#fff] bg-[#06b474] px-2 rounded-full text-[22px] w-[36px] h-[36px] grid place-content-center`}
      ></i>
    </Link>
  );
}

export default Icon;
