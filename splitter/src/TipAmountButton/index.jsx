function TipAmountButton({tipDisplay, clickHandler}) {

    return (
    <button className="text-white text-1xl bg-teal-900 text-center py-4 rounded-lg"
    onClick={clickHandler}
    >
      {tipDisplay}
    </button>
  );
}

export default TipAmountButton;
