import React from "react";



const Button = (props) => {

    let id = props.func;
    if (props.func === '+') {
        id = 'plus';
    }
    if (props.func === '-') {
        id = 'minus';
    }

    return (
        <div id={`button-${id}`} className="button">{props.num}</div>
    )   
}

export default Button;