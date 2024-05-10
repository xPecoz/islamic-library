import Image from "next/image";
import pageError from "@/public/pageError.png";

const Error = () => {
  return (
    <div className="w-full flex justify-center">
      <Image src={pageError} alt="404 Error" className="imgError" />
    </div>
  );
};

export default Error;
