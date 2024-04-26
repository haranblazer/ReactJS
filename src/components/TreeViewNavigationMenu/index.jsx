import MenuList from "./MenuList";
import menus from "./data";
import "./style.css";


export default function TreeViewNaviationMenu() {   
       return (<><h1 className="App-Header">Project 6 : TreeView Navigation Menu</h1>
    <div className="treeview-container"><MenuList list={menus}/></div></>);   
}