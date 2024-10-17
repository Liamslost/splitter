import InputBox from "../InputBox"
import InputPeople from "../InputPeople"
import TipsContainer from "../TipsContainer"

function WrapperLeft (){
    return (

    <div className=" w-1/2 h-full bg-white  m-3 rounded-3xl border-2 border-black p-4">
        <InputBox/>
        <TipsContainer/>
        <InputPeople/>
        
    
    </div>
    )
}

export default WrapperLeft