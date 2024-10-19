import { useState } from "react";
import InputBill from "../InputBill";
import TipsContainer from "../TipsContainer";
import InputPeople from "../InputPeople";

function Container() {
  const [billValue, setBillValue] = useState(" ");
  const [peopleValue, setPeopleValue] = useState(1);
  const [tipDisplay, setTipDisplay] = useState(" ");
  const totalPerPerson = (billValue / peopleValue).toFixed(2);

  function handleBillChange(event) {
    setBillValue(event.target.value);
  }
  console.log(billValue);

  function handlePeopleChange(event) {
    let value = event.target.value;

    if (value === "") {
      setPeopleValue(1);
      return;
    }
    if (value < 1) {
      value = 1;
    }
    setPeopleValue(value);
    event.target.value = value;
  }

  function handleReset() {
    setTipDisplay = "0.00";
    setBillValue = "0.00";
    setPeopleValue = "0.00";
    console.log("reset");
  }

  return (
    <div
      id="input"
      className="bg-white w-2/3 rounded-3xl p-8 m-auto flex items-center gap-3"
    >
      <div className=" w-1/2 bg-white  m-3 rounded-3xl p-6">
        <InputBill handleBillChange={handleBillChange} />
        <TipsContainer />
        <InputPeople handlePeopleChange={handlePeopleChange} />
      </div>
      <div id="output" className="bg-teal-950 w-1/2 p-8 rounded-3xl">
        <div className="my-10 px-4 flex justify-between">
          <div className="">
            <div className="text-white">Tip Amount</div>
            <div className="text-teal-700">/ person</div>
          </div>
          <div className="text-6xl text-teal-600">0</div>
        </div>
        <div className="my-10 px-4 flex justify-between">
          <div className="">
            <div className="text-white">Total</div>
            <div className="text-teal-700">/ person</div>
          </div>
          <div className="text-6xl text-teal-600">{totalPerPerson}</div>
        </div>
        <button
          onClick={handleReset}
          className="w-2/3 block text-teal-900 border-teal-800 bg-teal-700 text-3xl rounded-lg tracking-widest mx-auto mt-36  p-4 text-center border-4"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Container;
