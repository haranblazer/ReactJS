import MenuList from "./MenuList";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./style.css";

export default function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({});
  const handleToggleChildren = (currentLabel) => {
    setDisplayChildren({
      ...displayChildren,
      [currentLabel]: !displayChildren[currentLabel],
    });
  };
  console.log(displayChildren);
  return (
    
        <li>
          <div className="menu-container">
            <p>{item.label}</p>
            {item && item.children && item.children.length ? (
              <span onClick={() => handleToggleChildren(item.label)}>
                {
                    displayChildren[item.label] ? <FaMinus  size={25} /> : <FaPlus  size={25} />
                }
              </span>
            ) : null}
          </div>
    
          {item && item.children && item.children.length > 0 && displayChildren[item.label] ? (
            <MenuList list={item.children} />
          ) : null}
        </li>
    
  );
}
