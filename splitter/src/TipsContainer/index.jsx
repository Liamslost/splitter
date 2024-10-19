import TipAmount from "../TipAmount"   
import { useState } from "react"

function TipsContainer(){

    const [tipAmount, setTipAmount] = useState(0)


    function handleClick5Percent (){
        setTipAmount(5)
    }
  
    function handleClick10Percent(){
      setTipAmount(10)
    }

    function handleClick15Percent(){
        setTipAmount(15)
    }
  
    function handleClick20Percent(){
      setTipAmount(20)
    }

    function handleClick25Percent(){
        setTipAmount(25)
      }
    
    return (
        <div className="h-2/5 my-12" >
            <p className="text-lg" >Select Tip % <span className="text-sm float-right">the tip applied is {tipAmount}%</span></p>
            <div className=" grid grid-cols-3 gap-3 my-4">
                <TipAmount className="5Percent" class=" " tipDisplay="5" clickHandler={handleClick5Percent}/>
                <TipAmount id="10Percent" tipDisplay="10" clickHandler={handleClick10Percent}/>
                <TipAmount id="15Percent" tipDisplay="15"clickHandler={handleClick15Percent}/>
                <TipAmount id="20Percent" tipDisplay="20"clickHandler={handleClick20Percent}/>
                <TipAmount id="25Percent" tipDisplay="25"clickHandler={handleClick25Percent}/>
                <TipAmount id="customPercent" tipDisplay="Custom"/>
            </div>
            
        </div>
    )
}

export default TipsContainer