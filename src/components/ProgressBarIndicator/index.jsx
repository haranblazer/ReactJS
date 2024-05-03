import { toHaveFormValues } from '@testing-library/jest-dom/matchers';
import {useState, useEffect} from 'react';

export default function ProgressBarIndicator({url}){
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(toHaveFormValues);

    async function fetchData(url)
    {
        try{
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(true);
        }
        catch(err){ console.log(err);
        }
    }


    useEffect(() => {
         fetchData(url);
    }, [url]);

    return (<><h1>Project 9 : Progress Bar Indicator</h1></>);
}