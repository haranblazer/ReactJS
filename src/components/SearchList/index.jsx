import { useState, useTransition, useEffect } from "react";



const namesList=["Alice", "Bob", "Charlie","David","Eva","Frank"];

function SearchList(){
    const [searchTerm, setSearchTerm]= useState("");
    const [manageTerm, setManageTerm] = useState();
    const [filteredNames, setFilteredNames]= useState(namesList);
    const [isPending, setTransistion] = useState(); 

let handleManageTerm = (e) => {
   const term = e.target.value;
   setManageTerm(term);
}

 const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        setTransistion(() => {
            const filtered = namesList.filter((name) => name.toLowerCase().includes(term.toLowerCase()));
            setFilteredNames(filtered);
        })
 }

 const buttonClick = (e) => {
    const newList = filteredNames;   
    if(manageTerm){
    setFilteredNames(newList.concat(manageTerm)); 
    }
    else{
        alert ("Please enter a name");
    }
    setManageTerm("");
   
 }
    


    return (<><h1>SearchList</h1><label htmlFor="search">Search :</label>
    <input type="text" name="search" value={searchTerm} onChange={handleSearch} placeholder="Enter name to search"/>
    <p>
    <div style={{display:"inline-grid"}}>
  
    <ul>{filteredNames.map((name, index) => (<li key={index}>{name}</li>) )}</ul></div></p>
    <label htmlFor="manageTerm">Mange Term</label>
    <input type="text" name="manageTerm" value={manageTerm} onChange={handleManageTerm} placeholder="Enter the name"/>
    <button onClick={buttonClick}>Add</button>
    </>);
}
export default SearchList;