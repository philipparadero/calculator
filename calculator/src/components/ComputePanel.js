import React, { useEffect, useState } from 'react'
import Button from './Button'

const ComputePanel = (props) => {
    const [clicked, setClicked] = useState('');
    const [equation, setEquation] = useState('');
    


    const onClickButton = (text) =>{
        setEquation(equation+text);
    }

    console.log(equation);

    const renderedButtons = props.buttonText.map((item)=>{
        return (
            <div key={item.text}>
                <Button 
                    onClickButtonHandler={onClickButton}
                    text={item.text}
                />
            </div>
        )
    })

    return (
        <div>{renderedButtons}</div>
    )
}

export default ComputePanel;