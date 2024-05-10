function TimeBox(props) {
  return (
    <div className="text-center text-3xl flex flex-col gap-4 font-bold">
      <p>{props.text}</p>
      <div className="islamicTime bg-quranBtn rounded-xl p-2.5 h-[125px] grid place-content-center">
        {props.time}
      </div>
    </div>
  );
}

export default TimeBox;
