import ResultBox from "../ResultBox"

function WrapperRight (){
    return (

    <div className="h-full w-1/2 bg-teal-900 inline-block m-3 p-6 rounded-3xl">
        <ResultBox boxTitle="Tip Amount"/>
        <ResultBox boxTitle="Total"/>
    </div>
    )
}

export default WrapperRight