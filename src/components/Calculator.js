import React, { useState } from "react";

const Calculator = () => {

    const [display, setDisplay] = useState(true);
    const [value, setValue] = useState(0);
    const [currentNum, setCurrentNum] = useState('');
    const [equation, setEquation] = useState('');
    const [clearNext, setClearNext] = useState(false);

    const buttonsArr = ['+','-','.','⌫','x','ⴻ','√','^',1,2,3,4,5,6,7,8,9,0,'Enter'];

    const click = (func) => {
        if (display === true) {setDisplay(false)}
        if (func === '+'|| func === '-'|| func === 'x'|| func === 'ⴻ'||func === '^') {
            setValue(currentNum);
            setClearNext(true);
            setEquation(`${func}`)
        }
        if (func === '√') {
            if (currentNum) { sqrt(currentNum) }
        };
        
        if (func === '⌫') { 
            setCurrentNum('');
            setValue(0);
            setEquation('');
            setDisplay(true);
        }

        if (func === '.') {
            let decCheck = `${currentNum}`;
            if (clearNext) {
                setCurrentNum('0.')
                setClearNext(false)
            } else {
                if (!decCheck.includes(".")) {
                    if (currentNum === 0 || currentNum === '') {
                        setCurrentNum('0.')
                    } else {
                        setCurrentNum(`${currentNum}` + func);
                    }
                }
            }
        }

        if (typeof func === "number") { 
            setCurrentNum(`${currentNum}` + func);
            if (clearNext || currentNum === 0) { 
                setCurrentNum(func)
                setClearNext(false)
            };
        };
        if (func === 'Enter') {
            if (equation === '+') { add(currentNum) };
            if (equation === '-') { subtract(currentNum) };
            if (equation === 'x') { multiply(currentNum) };
            if (equation === 'ⴻ') { divide(currentNum) };
            if (equation === '^') { exponent(currentNum) };
            setEquation('');
        }
    }

    const add = (num) => {
        setValue(parseFloat(value)+parseFloat(num));
        setCurrentNum((parseFloat(value)+parseFloat(num)));
    }
    const subtract = (num) => {
        setValue(parseFloat(value)-parseFloat(num));
        setCurrentNum(parseFloat(value)-parseFloat(num));
    }
    const multiply = (num) => {
        setValue(parseFloat(value)*parseFloat(num));
        setCurrentNum(parseFloat(value)*parseFloat(num));
    }
    const divide = (num) => {
        setValue(parseFloat(value)/parseFloat(num));
        setCurrentNum(parseFloat(value)/parseFloat(num));
    }
    const sqrt = (num) => {
        setValue(Math.sqrt(parseFloat(num)));
        setCurrentNum(Math.sqrt(parseFloat(num)));
    }
    const exponent = (num) => {
        let total = (parseFloat(value)**parseFloat(num));
        setValue(total);

        if (total > 99999999) {
            setCurrentNum(total.toExponential(4));
        } else {
            setCurrentNum(total);
        }
    }

    return(
        <div className="calculator">
            <div className="screen screen-center">
                {(display === true)
                    ? <h1 className="display">Reaculator</h1>
                    : <h1 className="display">{currentNum}</h1>
                }
            </div>
            <div className="buttons">
                {buttonsArr.map((e, i) => 
                    <div 
                        id={`button-${buttonsArr[i]}`}
                        className="button"
                        key={i} 
                        num={buttonsArr[i]} 
                        func={buttonsArr[i]}
                        onClick={() => click(buttonsArr[i])}
                    >
                        {buttonsArr[i]}
                    </div>)}
                
            </div>
        </div>
    )
}

export default Calculator;