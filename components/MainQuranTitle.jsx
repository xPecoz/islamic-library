function MainQuranTitle(props) {
  return (
    <div
      id={props.id}
      className="topic flex items-center justify-between text-white px-3 rounded-md bg-header mb-3"
    >
      <h2 className="font-bold text-3xl">{props.title}</h2>
      <p className="page-num font-bold bg-no-repeat bg-center bg-contain w-fit p-4 text-2xl">
        {props.id}
      </p>
    </div>
  );
}

export default MainQuranTitle;
