function MainTitle(props) {
  return (
    <h2 className="main-h2 mb-2 font-bold relative w-fit text-2xl before:content-[''] before:w-2/5 before:absolute before:-bottom-2 before:transition-all before:duration-300 before:bg-main">
      {props.text}
    </h2>
  );
}

export default MainTitle;
