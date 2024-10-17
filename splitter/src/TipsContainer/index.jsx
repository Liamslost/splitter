import TipSelect from "../TipSelect"

function TipsContainer(){
    return (
        <div className="border-2 border-black h-2/5 p-6 my-12" >
            <p>Select Tip %</p>
            <div className=" grid grid-cols-3 gap-3 my-4">
            <TipSelect/>
            <TipSelect/>
            <TipSelect/>
            <TipSelect/>
            <TipSelect/>
            <TipSelect/>
            </div>
        </div>
    )
}

export default TipsContainer