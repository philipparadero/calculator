import React, { useEffect, useState } from 'react'
import Button from './Button'
import '../ComputePanel.css'

const ComputePanel = (props) => {
    const [result, setResult] = useState('0');
    const [equation, setEquation] = useState('');

    const onClickButton = (text) =>{
        console.log(text);
        if(text === '=') {
           calculate();
        } else if(text === 'x') {
            setEquation(equation+'*');
        } else if(text === '+/-') {
            setEquation(-1*(equation));
        } else if(text === 'del') {
            setEquation(equation.slice(0, -1));
        } else if(text === 'c') {
            setEquation('');
            setResult('0');
        }
        else {
            setEquation(equation+text);
        }
    }
  
    const calculate = () =>{
        try{
            setResult(eval(equation));
            setEquation(equation);
        } catch (e) {
            setResult("Invalid Equation");
            setEquation('');
        }
    }

   
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
        <div className="body-calculator">
            <div className="equation-panel">{equation}</div>
            <div className="result-panel">{result}</div>
            <div className="flex-container">{renderedButtons}</div>
        </div>
    )
}

export default ComputePanel;