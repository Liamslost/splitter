import WrapperLeft from "../WrapperLeft";
import WrapperRight from "../WrapperRight";

function Container() {
  return (
    <div className="bg-white h-1/2 w-2/3 rounded-3xl p-8 m-auto flex items-center gap-3">
      <WrapperLeft />
      <WrapperRight />
    </div>
  );
}

export default Container;
