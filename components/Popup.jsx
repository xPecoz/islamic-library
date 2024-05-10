function Popup(props) {
  return (
    <div
      id="popup"
      className="fixed w-screen h-screen overflow-scroll py-4 px-10 md:px-16 pt-24 flex items-center justify-center top-0 right-0 translate-x-full duration-300 backdrop-blur-lg z-10"
    >
      <div
        className="w-full h-full absolute top-0"
        onClick={() =>
          document.getElementById("popup").classList.add("translate-x-full")
        }
      ></div>
      <div className="bg-white border-2 border-main rounded-lg pt-5 p-4 flex flex-col items-center gap-5 relative font-medium overflow-scroll max-h-full">
        <button
          className="uil uil-times absolute top-2 right-2 bg-main rounded-full w-10 h-10 text-3xl text-white"
          id="closePopup"
          onClick={() =>
            document.getElementById("popup").classList.add("translate-x-full")
          }
        ></button>
        <h2 className="text-2xl md:text-3xl">{props.type}</h2>
        <h2
          className="text-2xl md:text-3xl bg-body rounded-md p-2 md:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: props.title }}
        ></h2>
        <hr className="w-full" />
        <p
          className="text-xl md:text-2xl max-h-72 w-full"
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></p>
      </div>
    </div>
  );
}

export default Popup;
