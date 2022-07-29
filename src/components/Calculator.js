import React from "react";
import Button from "./Button";

const Calculator = () => {

    const buttonsArr = ['+','-','x','ⴻ',1,2,3,4,5,6,7,8,9,0,'Enter'];

    return(
        <div className="calculator">
            <div className="screen screen-center">
                <h1 className="display">Calculator</h1>
            </div>
            <div className="buttons">
                {buttonsArr.map((e, i) => 
                    <Button key={i} num={buttonsArr[i]} func={buttonsArr[i]}
                />)}
            </div>
            
        </div>

    )
}

export default Calculator;