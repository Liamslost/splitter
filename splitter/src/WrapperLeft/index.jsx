import InputBill from "../InputBill"
import InputPeople from "../InputPeople"
import TipsContainer from "../TipsContainer"
import { useState } from "react"

function WrapperLeft (){

    const [billValue, setBillValue] = useState('')
    const [peopleValue, setPeopleValue] = useState('')
    function handleBillChange(event){
        setBillValue(event.target.value)
    }
    console.log(billValue)

    function handlePeopleChange(event){
        setPeopleValue(event.target.value)
    }
    console.log(peopleValue)

    return (

    <div className=" w-1/2 h-full bg-white  m-3 rounded-3xl border-2 border-black p-6">
        <InputBill handleBillChange={handleBillChange}/>
        <TipsContainer/>
        <InputPeople handlePeopleChange={handlePeopleChange}/>
        
    
    </div>
    )
}

export default WrapperLeft