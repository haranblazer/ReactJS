import { useState } from "react";
import  './style.css';

export default function LightDarkMode(){
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    const handleClick = () => {
        setTheme(theme === 'light' ? 'dark': 'light');
        localStorage.setItem("theme", theme === "light" ? 'dark' : 'light');
        console.log(theme);
    }
    return (<div className={theme === "light" ? 'container light' : 'container dark'}><h1>Project 8 : Light Dark Mode</h1>
    <p>Hello World!</p>
    <button onClick={handleClick}>Switch to {localStorage.getItem("theme") === 'light' ? 'DARK' : 'LIGHT'} Theme</button></div>);
}