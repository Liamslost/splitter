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
    <modal className="bg-teal-900 h-full w-full">
    </modal>
      <div>
        <div className="m-auto w-72 my-10">
          <h1 className="text-teal-600 text-5xl text-left">
            S P L I
          </h1>
          <h1 className="text-teal-800 border-t-4 border-teal-900 text-5xl text-right">
            T T E R
          </h1>
        </div>
        <Calculator />
      </div>
    </>
  );
}

export default App;
