import ResultBox from "../ResultBox";

function WrapperRight() {
  function handleReset() {
    setTipAmount("0.00");
    setBillValue("0.00");
    setPeopleValue("0.00");
    console.log("reset");
  }
  return (
    <div className="bg-teal-950">
      <div className="my-10 px-4 flex justify-between">
        <div className="">
          <div className="text-white">Tip Ammount</div>
          <div className="text-teal-700">/ person</div>
        </div>
        <div className="text-6xl text-teal-600">0.00</div>
      </div>
      <div className="my-10 px-4 flex justify-between">
        <div className="">
            <div className="text-white">Total</div>
            <div className="text-teal-700">/ person</div>
        </div>
        <div className="text-6xl text-teal-600">
            0.00
        </div>
        </div>
        <button onClick={handleReset} className='w-2/3 block text-teal-900 border-teal-800 bg-teal-700 text-3xl rounded-lg tracking-widest mx-auto mt-36  p-4 text-center border-4'>
            Reset
        </button>
    </div>
  );
}

export default WrapperRight;
