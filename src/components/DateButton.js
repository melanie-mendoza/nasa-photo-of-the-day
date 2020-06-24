import React from "react";


function DateButton(props) {
    console.log(props)

    return (
        <button onClick={props.clickHandler} className="date-button">
            {props.buttonText}
        </button>

    )
}

export default DateButton;