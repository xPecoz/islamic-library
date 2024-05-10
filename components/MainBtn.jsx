import Link from "next/link";

function MainBtn(props) {
  return (
    <Link
      href={props.href}
      className="main-btn block text-white rounded-md py-2 px-3 font-bold transition-all duration-500 text-center text-lg active:scale-90 m-auto"
      download={props.download && props.download}
      target={props.target}
    >
      <p>{props.text}</p>
    </Link>
  );
}

export default MainBtn;
