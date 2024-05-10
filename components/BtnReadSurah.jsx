import Link from "next/link";

function BtnReadSurah(props) {
  return (
    <Link
      key={props.key}
      href={props.href}
      className="showSurah w-60 max-[400px]:w-52 relative shadow-lg border-2 border-quranBtn rounded-lg p-3 grid place-content-center text-2xl font-medium duration-300 hover:border-main hover:border-1 hover:text-sidebar active:scale-90"
    >
      {props.name}
      <span className="absolute bg-zinc-600 text-white text-center py-1 px-2 rounded-lg left-1/2 bottom-full w-4/5 origin-bottom">
        {props.revelationType === "Meccan" ? "مكية" : "مدنية"} آياتها{" "}
        {props.numberOfAyahs}
      </span>
    </Link>
  );
}

export default BtnReadSurah;
