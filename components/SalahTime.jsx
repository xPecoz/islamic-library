function SalahTime(props) {
  return (
    <div className="main-btn2 py-2.5 px-6 rounded-xl text-white font-bold text-[34px] leading-10 flex flex-col gap-3">
      <p>{props.name}</p>
      <p>{props.time}</p>
    </div>
  );
}

export default SalahTime;
