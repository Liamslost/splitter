function TipAmountButton({tipDisplay, clickHandler}) {

    return (
    <button className="text-white text-1xl bg-emerald-700 text-center py-4 rounded-lg"
    onClick={clickHandler}
    >
      {tipDisplay}
    </button>
  );
}

export default TipAmountButton;
