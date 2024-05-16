import KhatabNames from "@/components/pages/khatabNames";
import React from "react";

const Page = ({ params }) => {
  console.log(params);
  return <KhatabNames paramsTest={params} />;
};

export default Page;
