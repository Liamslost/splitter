function TipAmount({ discount, clickHandler}) {

    return (
    <button className="text-white text-2xl bg-teal-900 text-center py-4 rounded-lg"
    onClick={clickHandler}
    >
      {discount}%
    </button>
  );
}

export default TipAmount;
