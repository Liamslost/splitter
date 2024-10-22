import "./App.css";
import Calculator from "./Calculator";

function App() {

  function handleClickCustom(event) {
    event.target.style.scale = "110%";
    open.modal;
setTimeout(() => {
  event.target.style.scale = "100%";
}, 100);
}

  return (
    <>
      <div>
        <div className="m-auto h-28 w-72 my-10">
          <h1 className="text-teal-600 text-5xl text-left absolute">
            S P L I
          </h1>
          <h1 className="split text-teal-800 text-5xl text-right">
            T T E R
          </h1>
          <div className="grow w-0 h-1.5 bg-teal-900"></div>
        </div>
        <Calculator />
      </div>
    </>
  );
}

export default App;
