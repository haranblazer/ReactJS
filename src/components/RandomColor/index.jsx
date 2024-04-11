import  './style.css'
import { useState } from 'react';
export default function RandomColor(){
    const [colorType, setColorType] = useState('HEX');
    const [colorValue, setColorValue]= useState('#000000');
    const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);   
    }

    function handleHEXColor()
    {
       let hexColor = "#";
        for(let i=0; i<6; i++)
        {
         hexColor = hexColor + hex[randomColorUtility(hex.length)]
          console.log(hex.length);        
        };
        setColorValue(hexColor);
       
    }
    function handleRGBColor(){
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColorValue(`rgb(${r},${g},${b})`);


    }

    return(<div className="container"><h1>Project 2: Random Color</h1>
    <button onClick={() => setColorType('HEX')}>Select Hex</button>
    <button onClick={() => setColorType('RGB')}>Select RGB</button>
    <button onClick={colorType === "HEX" ? handleHEXColor : handleRGBColor}>Generate Random Color</button>
    <div className="output" style={{"background":colorValue}}>
    <h2>Output :</h2>
    <span>
    Color Type : <b>{colorType}</b></span><br/>
    <span>
    Color Value : <b>{colorValue}</b></span>
    </div>
    </div>);
}