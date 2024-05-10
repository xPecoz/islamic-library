import Num from "./Num";

function Choose(props) {
  return (
    <div className="choose-sura flex items-center justify-between gap-3 pb-3 mt-3">
      <div className="all-data flex items-center gap-2">
        <Num id={props.id} />
        <div className="sura-data text-md text-xl">
          <p className="font-medium">{props.name}</p>
          <p className="font-normal">{props.des}</p>
        </div>
      </div>
      <a
        href={props.href}
        className="main-btn block text-white rounded-md py-2 px-3 font-bold transition-all duration-500 text-center text-lg active:scale-90 m-auto"
      >
        <p>قراءة</p>
      </a>
    </div>
  );
}

export default Choose;
