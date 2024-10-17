import ResetButton from "../ResetButton"
import ResultBox from "../ResultBox"

function WrapperRight (){

    return (
<>
    <div className="h-full w-1/2 bg-teal-900 k m-3 p-5 rounded-3xl">
        <ResultBox boxTitle="Tip Amount"/>
        <ResultBox boxTitle="Total"/>
        <div className="text-3xl bg-teal-700 rounded-lg w-2/3 mx-auto p-4 text-center border-2">
        <ResetButton/>
    </div>
    </div>

</>
    )
}

export default WrapperRight