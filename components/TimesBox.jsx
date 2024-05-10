import TimeBox from "./TimeBox";

function TimesBox(props) {
  const obj = props.obj;
  return (
    <div className="flex flex-col gap-5 bg-white w-full p-4 rounded-xl">
      <p className="text-[#049e51] text-3xl text-center font-bold">
        المتبقي علي {props.name}
      </p>
      <div
        className="timeBoxs grid gap-5"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        <TimeBox text="أيام" time={obj.days} />
        <TimeBox text="ساعات" time={obj.hours} />
        <TimeBox text="دقائق" time={obj.minutes} />
        <TimeBox text="ثواني" time={obj.seconds} />
      </div>
    </div>
  );
}

export default TimesBox;
