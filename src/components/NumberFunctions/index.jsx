import React, {useState} from "react";

function convertedNumber(number){
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function commaNumber(number){
    //return number.toLocaleString(navigator.language, { minimumFractionDigits: 2 })
    var nf = Intl.NumberFormat();
    return nf.format(number);
}
export default function NumberFunctions(){
    const [convertedNum, setConvertedNum] = useState();
    //const [shortFormat, setShortFormat] = useState();  
    const [commaNum, setCommaNum] = useState(); 
    
    const convertinputnumber = function(event) {
        setConvertedNum(convertedNumber(event.target.value));
        //setShortFormat(compactNumber(event.target.value));
        setCommaNum(commaNumber(event.target.value));
    }
    
    const compactNumber = (value) => {  
        const suffixxes = ["", "k", "m", "s", "b","t"];
        const suffixNum = Math.floor(("" + value).length/3);
        let shortValue = parseFloat((suffixNum != 0 ? (value/Math.pow(1000, suffixNum)) : value).toPrecision(2));
    }

    return (<><h1>Project 9 : Number Functions</h1>
    <label for="inputnumber">Enter the number : </label>
    <input type="number" name="inputnumber" onChange={convertinputnumber}/>
    <p>
    Converted Number is <strong>{convertedNum}</strong></p>
    <p>
    Comma Number is <strong>{commaNum}</strong></p>
    
       </>);
}