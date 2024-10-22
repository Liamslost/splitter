import { useEffect, useState } from "react";
import TipAmountButton from "../TipAmountButton";

function Calculator({handleClickCustom}) {
  const [billValue, setBillValue] = useState("");
  const [peopleValue, setPeopleValue] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  function handleClick5Percent(event) {
    setTipAmount(5);
    event.target.style.scale = "110%";
    setTimeout(() => {
      event.target.style.scale = "100%";
    }, 100);
  }

  function handleClick10Percent(event) {
    setTipAmount(10);
    event.target.style.scale = "110%";
    setTimeout(() => {
      event.target.style.scale = "100%";
    }, 100);
  }

  function handleClick15Percent(event) {
    setTipAmount(15);
    event.target.style.scale = "110%";
    setTimeout(() => {
      event.target.style.scale = "100%";
    }, 100);
  }

  function handleClick20Percent(event) {
    setTipAmount(20);
    event.target.style.scale = "110%";
    setTimeout(() => {
      event.target.style.scale = "100%";
    }, 100);
  }

  function handleClick25Percent(event) {
    setTipAmount(25);
    event.target.style.scale = "110%";
    setTimeout(() => {
      event.target.style.scale = "100%";
    }, 100);
  }

  function handleChangeCustom (event){
    let value = event.target.value 
    if (value == ""){
      setTipAmount(0)
      return
    }
    setTipAmount(value);
  }



  function handleBillChange(event) {
    setBillValue(event.target.value);
  }

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

  const handleReset = (event) => {
    event.target.style.scale = "110%";
    setTimeout(() => {
      event.target.style.scale = "100%";
    }, 100);
    setTipAmount(0);
    setBillValue("");
    setPeopleValue("");
    console.log("Tip amount is " + tipAmount);
    console.log(`bill value is ` + billValue);
    console.log(`people value is ` + peopleValue);
    console.log("tip per person is " + tipPerPerson);
    console.log("total per person is " + totalPerPerson);
    console.log("reset");
  };

  useEffect(() => {
    if (billValue !== "" && (tipAmount !== "") & (peopleValue !== "")) {
      const valueA = ((billValue / 100) * tipAmount) / peopleValue;
      setTipPerPerson(valueA.toFixed(2));

      const valueB = billValue / peopleValue + Number(valueA);
      setTotalPerPerson(valueB.toFixed(2));
    } else {
      setTotalPerPerson("0.00");
      setTipPerPerson("0.00");
    }
  }, [billValue, tipAmount, peopleValue]);

  return (
    <div className="bg-white rounded-3xl p-5 mx-4 mb-8 shadow-xl lg:flex lg:w-7/12 lg:mx-auto lg:gap-4 xl:mt-40">
      <div id="input" className="bg-white rounded-3xl pt-4 pb-9 lg:w-1/2">
        <div>
          <label
          type="number"
            htmlFor="bill"
            className="block text-lg font-medium leading-6 text-gray-900"
          >
            Bill
          </label>
          <div className="relative mt-2 rounded-md ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="text"
              placeholder="0.00"
              value={billValue}
              onChange={handleBillChange}
              name="bill"
              id="bill"
              className="bg-sky-100 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="h-2/5 my-12">
          <p className="text-m">Select Tip %</p>
          <div className="tipButton grid grid-cols-3 gap-3 my-4">
            <TipAmountButton
              tipDisplay="5"
              clickHandler={handleClick5Percent}
            />
            <TipAmountButton
              tipDisplay="10"
              clickHandler={handleClick10Percent}
            />
            <TipAmountButton
              tipDisplay="15"
              clickHandler={handleClick15Percent}
            />
            <TipAmountButton
              tipDisplay="20"
              clickHandler={handleClick20Percent}
            />
            <TipAmountButton
              tipDisplay="25"
              clickHandler={handleClick25Percent}
            />
            <input placeholder="Custom" onChange={handleChangeCustom} className="bg-teal-50 border rounded-lg text-center"></input>
          </div>
          <span className="text-xs float-right bottom-0">
            the tip applied is {tipAmount}%
          </span>
        </div>

        <div>
          <label
            htmlFor="people"
            className="block text-lg font-medium leading-6 text-gray-900"
          >
            People
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
            <input
              type="number"
              value={peopleValue}
              placeholder="1"
              onChange={handlePeopleChange}
              name="people"
              id="people"
              className="bg-sky-100 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div id="output" className="bg-teal-950  py-3 px-1 rounded-3xl lg:w-1/2">
        <div className="my-10 px-4 flex justify-between">
          <div className="">
            <div className="text-white text-sm">Tip Amount</div>
            <div className="text-teal-700">/ person</div>
          </div>
          <div className="text-5xl text-teal-600">{tipPerPerson}</div>
        </div>
        <div className="my-10 px-4 flex justify-between">
          <div className="">
            <div className="text-white">Total</div>
            <div className="text-teal-700">/ person</div>
          </div>
          <div className="text-5xl text-teal-600">{totalPerPerson}</div>
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

export default Calculator;
