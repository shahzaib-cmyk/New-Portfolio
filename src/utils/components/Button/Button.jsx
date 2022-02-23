import { memo, useRef, useMemo } from "react";
import './Button.css';

/*  Animation 
 1. opacity
 2. bounce 
 
*/


function Button({
    style={},
    className="",
    children,
    onClickAnimation="opacity",
    transition= 0.15,
    onTouchStart,
    glowColor="white",
    onTouchEnd,
    ...rest
  }) {
  
  const btnRef= useRef();

  const onTouch = (e)=>{
    //// to allow multiple animations
    const classes = onClickAnimation.split(" ")
    classes.forEach(cls=>{
      btnRef.current.classList.add(cls)
    })
    onTouchStart && onTouchStart(e);
    
  }
  const onRelease = (e)=>{
    const classes = onClickAnimation.split(" ")
    classes.forEach(cls=>{
      btnRef.current.classList.remove(cls)
    })
    onTouchEnd && onTouchEnd(e);
    
  }
  return (
    <button 
      {...rest} 
      className={"utilityButtonComponent "+className}
      style={{ ...style, [`--glow-color`]:glowColor, transition:`${transition}s`}}
      ref={btnRef} 
      onTouchStart={onTouch} 
      onTouchEnd={onRelease} 
    >
     {children}
    </button>
  );
}

export default memo(Button);

function isFunction(x) {
    if(x instanceof Function) {
        return true
    }
    else {
        return false
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////