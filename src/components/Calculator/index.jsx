import { useEffect, useState, useRef, } from "react";
import TipAmountButton from "../TipAmountButton";

function Calculator() {
  const [billValue, setBillValue] = useState("");
  const [peopleValue, setPeopleValue] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  const customTipInputRef = useRef(null);

  function handleClick5Percent(event) {
    setTipAmount(5);
    if (customTipInputRef.current) {
      customTipInputRef.current.value = "";
    }
    event.target.style.scale = "110%";
    setTimeout(() => {
      event.target.style.scale = "100%";
    }, 100);
  }

  function handleClick10Percent(event) {
    setTipAmount(10);
    if (customTipInputRef.current) {
      customTipInputRef.current.value = "";
    }
    event.target.style.scale = "110%";
    setTimeout(() => {
      event.target.style.scale = "100%";
    }, 100);
  }

  function handleClick15Percent(event) {
    setTipAmount(15);
    if (customTipInputRef.current) {
      customTipInputRef.current.value = "";
    }
    event.target.style.scale = "110%";
    setTimeout(() => {
      event.target.style.scale = "100%";
    }, 100);
  }

  function handleClick20Percent(event) {
    setTipAmount(20);
    if (customTipInputRef.current) {
      customTipInputRef.current.value = "";
    }
    event.target.style.scale = "110%";
    setTimeout(() => {
      event.target.style.scale = "100%";
    }, 100);
  }

  function handleClick25Percent(event) {
    setTipAmount(25);    
    if (customTipInputRef.current) {
      customTipInputRef.current.value = "";
    }
    event.target.style.scale = "110%";
    setTimeout(() => {
      event.target.style.scale = "100%";
    }, 100);
  }

  function handleChangeCustom(event) {
    let value = event.target.value;
    if (value == "") {
      setTipAmount(0);
      return;
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

    if (customTipInputRef.current) {
      customTipInputRef.current.value = "";
    }
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
    <div className="bg-gray-200 rounded-3xl p-5 mx-4 mb-8 shadow-xl lg:flex lg:w-7/12 lg:mx-auto lg:gap-4 xl:mt-50">
      <div id="inputBill" className="rounded-3xl pt-4 pb-9 lg:w-1/2">
        <div>
          <label
            htmlFor="bill"
            className="block text-lg font-medium leading-6 text-gray-900"
          >
            Bill
          </label>
          <div className="relative mt-2 rounded-md shadow-lg">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              value={billValue}
              placeholder="0.00"
              onChange={handleBillChange}
              name="bill"
              id="bill"
              className="bg-emerald-50 block w-full rounded-md border-0 py-1.5 pl-7 pr-3 text-gray-900 ring-1 ring-emerald-100 placeholder:text-gray-300 invalid:bg-red-100 focus:ring-inset focus:ring-emerald-100 sm:text-sm sm:leading-6"
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
            <input
              placeholder="Custom"
              onChange={handleChangeCustom}
              ref={customTipInputRef}
              className="bg-emerald-50 border rounded-lg text-center"
            ></input>
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
          <div className="relative mt-2 rounded-md shadow-lg">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2">
              <span className="text-gray-500 sm:text-sm">
                <img className="h-3.5 opacity-60" src="public/user.svg" />
              </span>
            </div>
            <input
              type="number"
              value={peopleValue}
              placeholder="1"
              onChange={handlePeopleChange}
              name="people"
              id="people"
              className="bg-emerald-50 block w-full rounded-md border-0 py-1.5 pl-7 pr-3 text-gray-900 ring-01 ring-emerald-100 placeholder:text-gray-300 invalid:bg-red-100 focus:ring-2 focus:ring-emerald-300 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

      </div>
      <div id="output" className="bg-emerald-950  py-3 px-1 rounded-3xl lg:w-1/2">
        <div className="my-10 px-4 flex justify-between">
          <div className="">
            <div className="text-white text-sm">Tip Amount</div>
            <div className="text-emerald-700">/ person</div>
          </div>
          <div className="text-5xl text-emerald-600">{tipPerPerson}</div>
        </div>
        <div className="my-10 px-4 flex justify-between">
          <div className="">
            <div className="text-white">Total</div>
            <div className="text-emerald-700">/ person</div>
          </div>
          <div className="text-5xl text-emerald-600">{totalPerPerson}</div>
        </div>
        <button
          id="resetButton"
          onClick={handleReset}
          className="w-2/3 block text-emerald-900 border-emerald-800 bg-emerald-700 text-3xl rounded-lg tracking-widest mx-auto mt-36  p-4 text-center border-4"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Calculator;
