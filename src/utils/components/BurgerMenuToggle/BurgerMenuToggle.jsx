
import { memo, useRef, useState, useEffect, useCallback } from "react";
import './BurgerMenuToggle.css';
import {
  TouchableOpacity,
} from  "utils/components/containers"
import RippleButton from "../RippleButton/RippleButton.jsx"
import Square from "../Square/Square.jsx"

/*
const cssVariablesMap = {
  color : "--brg-line-color",
  margin: "--brg-menu-margin",
  height: "--brg-line-height",
}
*/

function BurgerMenuToggle(
  {
    style,
    onChange,
    className="",
    lineColor="black",
    alignMent="flex-end",
    ...rest
  }) {
  
  const [ open , setOpen ] = useState(()=>false);
  //console.log(`open : ${open}`);
  useEffect(() => {
     onChange && onChange(open);
  } , [open] )
  
  const toggle = useCallback(()=>{
    setOpen(p=>!p);
  },[])
  
  return (
    <TouchableOpacity 
      {...rest}
      style={{
        padding: 10,
        borderRadius : "50%" ,
        ["--brg-line-color"]: lineColor,
        ...style,
      }} 
      onClick={toggle}
      className={"utilityBurgerMenuToggle_Container "+className}
      >
       <div className={`brg_menu_container ${open ? "hidee" : ""}`}  >   
          <div className={`brg_line ${open && "brg_line_split"}`} />   
          <div className={`brg_line ${open ? "brg_line_split" : ""}`} style={{alignSelf:alignMent}} />   
          <div className={`brg_line ${open ? "brg_line_split" : ""}`} />   
       </div>
       
       <div className={`brg_centerCross_container ${!open ? "hide" : ""}`}  >   
          <div className={`brg_centerCross_line ${open ? "brg_centerCross_line_crossed" : ""}`} />   
          <div className={`brg_centerCross_line ${open ? "brg_centerCross_line_crossed" : ""}`} />   
       </div>
       
      
        
    </TouchableOpacity>
  );
}

export default memo(BurgerMenuToggle);




                                                         
                                                    