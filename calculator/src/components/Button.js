import React from 'react';
import '../Button.css'

const Button = (props) => {

    const onClickButton = () =>{
        props.onClickButtonHandler(props.text);
    }
   
    return (
        <div className="button"  name={props.text} onClick={onClickButton}>{props.text}</div>
    )
};

export default Button;