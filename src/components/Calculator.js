import React, { useState } from "react";

const Calculator = () => {

    // Set whether the default "Reaculator" display is on
    const [display, setDisplay] = useState(true);
    // Set value, the saved number rather than the currently displayed number
    const [value, setValue] = useState(0);
    // Watch number being typed in, combine with 'value'
    const [currentNum, setCurrentNum] = useState('');
    // Watch number, not used in display but used in calculations
    // Important for scientific notation, when currentNum and trueNum may deviate
    const [trueNum, setTrueNum] = useState('');
    // Watch equation being used in calculation
    const [equation, setEquation] = useState('');
    // If true, display will clear current number and allow new number on display on following input
    const [clearNext, setClearNext] = useState(false);

    const buttonsArr = ['+','-','.','⌫','x','ⴻ','√','^',1,2,3,4,5,6,7,8,9,0,'Enter'];

    const click = (func) => {

        // display "Reaculator" if no functions or numbers are input
        if (display === true) {setDisplay(false)}

        // if function clicked, assign equation
        if (func === '+'|| func === '-'|| func === 'x'|| func === 'ⴻ'||func === '^') {

            // assign input into equation to be the displayed number when clicked
            setValue(trueNum);
            // when the next input is clicked, clear the display first
            setClearNext(true);
            // calculate new value based on the previous equation's function
            if (equation === '+') { add(trueNum) };
            if (equation === '-') { subtract(trueNum) };
            if (equation === 'x') { multiply(trueNum) };
            if (equation === 'ⴻ') { divide(trueNum) };
            if (equation === '^') { exponent(trueNum) };
            // Then assign new equation's function based on button label
            setEquation(`${func}`)
        }
        if (func === '√') {
            // calculate new value based on the previous equation
            if (trueNum) { sqrt(trueNum) }
        };
        
        if (func === '⌫') { 
            // clear all states, return to "Reaculator" screen
            setCurrentNum('');
            setTrueNum('');
            setValue(0);
            setEquation('');
            setDisplay(true);
        }

        if (func === '.') {
            let decCheck = `${currentNum}`;
            // if displayed number is to be cleared, if so a "0" before "."
            if (clearNext) {
                setCurrentNum('0.')
                setClearNext(false)
            } else {
                // check if a non-zero number is currently displayed, if so a "0" before "."
                if (!decCheck.includes(".")) {
                    if (currentNum === 0 || currentNum === '') {
                        setCurrentNum('0.');
                        setValue('0.');
                        setTrueNum('0.');
                    } else {
                        setCurrentNum(`${currentNum}` + '.');
                        setValue(`${currentNum}` + '.');
                        setTrueNum(`${currentNum}` + '.');
                    }
                }
            }
        }

        if (typeof func === "number") { 
            // if number clicked, concat to display
            setCurrentNum(`${currentNum}` + func);
            if (clearNext || currentNum === 0) { 
                setCurrentNum(func)
                setClearNext(false)
            };
            setTrueNum(`${trueNum}` + func);
            if (clearNext || trueNum === 0) { 
                setTrueNum(func)
            };
        };

        if (func === 'Enter') {
            // in enter clicked, calculate based on last selected equation
            if (equation === '+') { add(trueNum) };
            if (equation === '-') { subtract(trueNum) };
            if (equation === 'x') { multiply(trueNum) };
            if (equation === 'ⴻ') { divide(trueNum) };
            if (equation === '^') { exponent(trueNum) };
            setEquation('');
        }
    }

    // equations
    const add = (num) => {
        let total = parseFloat(value)+parseFloat(currentNum);
        setValue(total);
        setTrueNum(total);
        largeNumberCheck(total);
    }
    const subtract = (num) => {
        let total = parseFloat(value)-parseFloat(currentNum);
        setValue(total);
        setTrueNum(total);
        largeNumberCheck(total);
    }
    const multiply = (num) => {
        let total = parseFloat(value)*parseFloat(currentNum); 
        setValue(total);
        setTrueNum(total);
        largeNumberCheck(total);
    }
    const divide = (num) => {
        let total = parseFloat(value)/parseFloat(currentNum);
        setValue(total);
        setTrueNum(total);
        largeNumberCheck(total);
    }
    const sqrt = (num) => {
        let total = Math.sqrt(parseFloat(currentNum));
        setValue(total);
        setTrueNum(total);
        largeNumberCheck(total);
    }
    const exponent = (num) => {
        let total = (parseFloat(value)**parseFloat(currentNum));
        setValue(total);
        setTrueNum(total);
        largeNumberCheck(total);
    }
    // if number too large, use scientific notation
    const largeNumberCheck = (num) => {
        
        if (num > 999999999) {
            setCurrentNum(num.toExponential(4));
        } else {
            setCurrentNum(num);
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