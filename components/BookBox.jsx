import Image from "next/image";
import MainBtn from "./MainBtn";

function BookBox(props) {
  return (
    <div
      className="box flex flex-col justify-between gap-4 items-center py-5 px-9 rounded-xl bg-white"
      data-type={props.type}
    >
      <div className="box-img h-72 overflow-hidden rounded-md border-[1.5px] border-[#ddd]">
        <Image
          src={props.img}
          alt="Error"
          className="w-full h-full duration-300 hover:scale-110 object-cover"
          width={1000}
          height={1000}
        />
      </div>
      <div className="book-data text-center font-medium">
        <p className="book-title">{props.title}</p>
        <p className="book-writer">{props.author}</p>
      </div>
      <div className="flex flex-wrap gap-4">
        <MainBtn href={props.href} text="قراءة" target="_blank" />
        <MainBtn
          href={props.href}
          download={props.title}
          target="_blank"
          text="تحميل"
        />
      </div>
    </div>
  );
}

export default BookBox;
