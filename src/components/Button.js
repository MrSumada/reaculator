import React, { useState, useEffect } from "react";

const Button = (props) => {

    let id = props.func;
    if (props.func === '+') {
        id = 'plus';
    }
    if (props.func === '-') {
        id = 'minus';
    }

    // const click = (func) => {

    //     if (func === '+') { setEquation("+");}
    //     if (func === '-') { setEquation("-");}
    //     if (func === 'x') { setEquation("x");}
    //     if (func === 'ⴻ') { setEquation("ⴻ");}
    //     if (func === '√') { setEquation("√");}
    //     if (func === '^') { setEquation("^");}
    //     if (func === '⌫') { setEquation("⌫");}

    //     if (typeof func === "number" || func === ".") { 
    //         setCurrentNum(currentNum + func);
    //         console.log(currentNum);
    //     };
    // }

    // const add = (num) => {
    //     setValue(value+num);
    // }
    // const subtract = (num) => {
    //     setValue(value-num);
    // }
    // const multiply = (num) => {
    //     setValue(value*num);
    // }
    // const divide = (num) => {
    //     setValue(value/num);
    // }
    // const sqrt = () => {
    //     setValue(Math.sqrt(value));
    // }
    // const exponent = (num) => {
    //     setValue(value**num);
    // }


    return (
        <div id={`button-${id}`} className="button" 
            // onClick={() => click(props.num)}
        >
            {props.num}
        </div>
    )   
}

export default Button;