import WrapperLeft from "../WrapperLeft";
import WrapperRight from "../WrapperRight";

function Container() {
  return (
    <div className="bg-white h-2/3 w-2/3 rounded-3xl p-6 m-auto flex items-center">
      <WrapperLeft />
      <WrapperRight />
    </div>
  );
}

export default Container;
