import { useState } from 'react';
import  '../RandomColor/style.css';
import {FaStar} from 'react-icons/fa';

export default function StarRating({noStars = 5}){
const [rating, setRating]  = useState(0);


function handleClickOK(getIndex)
{
    setRating(getIndex);   
}
function handleMouseOver(getIndex)
{
    setRating(getIndex);
}

return <div><h1>Project 3 : Star Rating</h1>
{
[...Array(noStars)].map((_,index)=>{
    index +=1
    return <FaStar key={index} className={index <= rating ? 'active' : 'inactive'} onClick={() => handleClickOK(index)} onMouseOver={() => handleMouseOver(index)}
    />

})
}
<p>
Current Ratings : {rating}
</p>
</div>
}