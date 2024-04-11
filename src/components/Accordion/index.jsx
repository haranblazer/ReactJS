// Single Selection and Multi Selection
import { useEffect, useState } from "react";
import data from "./data";
import './style.css';

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [btnName, setBtnName] = useState("Single Selection");
  const [enableMulti, setEnableMulti] = useState(false);
  const [MultiSelected, setMultiSelected] = useState([]);

  function singleSelection(currentId) {
    setSelected(currentId);
  }

  function multiSelection(currentId) {
    let multiArray = [...MultiSelected];
    const findIndex = multiArray.indexOf(currentId);
    debugger;
    if(findIndex === -1) 
        multiArray.push(currentId);
    else
        multiArray.splice(findIndex,1);
    setMultiSelected(multiArray);
  }

  useEffect (() =>{console.log(selected)},[selected]);

  return (<>
    <div className="wrapper">
    <h1>Project 1 : Accordion</h1>
    <button className={btnName === "Single Selection" ? 'bluebg' : 'greenbg' } onClick={() => {setBtnName(btnName === "Single Selection"  ? "Multi Selection" : "Single Selection"); setEnableMulti(!enableMulti); setSelected(0); setMultiSelected([]);}}>{btnName} </button>
        <div className="accordion">
      {data && data.length > 0 ? (
        data.map((d) => (
          <div className="item">
            <div className="title" onClick={() => enableMulti ? multiSelection(d.Id) : singleSelection(d.Id)}>
              <h5> {d.Title}</h5>
              <span>+</span>
            </div>
            {selected === d.Id || enableMulti & MultiSelected?.indexOf(d.Id) !== -1 ? (
              <div className="description">
                {d.Description}
                <span>-</span>
              </div>
            ) : null}
          </div>
        ))
      ) : (
        <div>No Data found</div>

      )}
    </div></div>
 </> );
}
