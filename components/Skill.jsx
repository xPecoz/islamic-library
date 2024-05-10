function Skill(props) {
  return (
    <span
      className={`py-[3px] px-[5px] text-[#fff] rounded-md w-[78px] text-center font-bold`}
      style={{ backgroundColor: `#${props.color}` }}
    >
      {props.name}
    </span>
  );
}

export default Skill;
