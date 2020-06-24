import React from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: transparent;
    border-radius: 3px;
    border 2px solid green;
`;

function LearnButton(props) {
    console.log(props)

    return (
        <Button onClick={props.clickHandler} className="learn-button">
            {props.buttonText}
        </Button>

    )
}

export default LearnButton;