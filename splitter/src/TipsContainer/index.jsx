import TipAmount from "../TipAmount"

function TipsContainer(){
    return (
        <div className="h-2/5 my-12" >
            <p>Select Tip %</p>
            <div className=" grid grid-cols-3 gap-3 my-4">
                <TipAmount percentage="5%"/>
                <TipAmount percentage="10%"/>
                <TipAmount percentage="15%"/>
                <TipAmount percentage="20%"/>
                <TipAmount percentage="25%"/>
                <TipAmount percentage="Custom"/>
            </div>
        </div>
    )
}

export default TipsContainer