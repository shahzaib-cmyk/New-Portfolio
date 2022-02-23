import {
  useCallback,
  useState,
  useRef,
  useMemo,
  memo,
  useEffect,
} from "react"
import './RippleButton.css';
import Button from "../Button/Button.jsx"


function RippleButton({
    style,
    className="",
    children,
    duration=0.5,
    onTouchStart,
    onTouchEnd,
    findOriginOnTouch=false,
    scale=40,
    rippleColor="crimson",
    ...rest
}) {
  
  const circleRef = useRef();
  const origin = useRef(undefined);
  
  
  const onTouch = useCallback((e)=>{
    if (!origin.current/* || findOriginOnTouch */ ) {
      console.log("origin calculated");
      origin.current = circleRef.current.getBoundingClientRect();
    }
    const {
      x: circleX,
      y: circleY,
    } = origin.current;
    const { pageX, pageY } = e.touches[0];
    console.log("circleX",circleX);
    console.log("circleY",circleY);
    const newX = pageX - circleX;
    const newY = pageY - circleY;
    
    circleRef.current.style.setProperty('--expandingCircleSize', `${scale}`);
    circleRef.current.classList.remove("expandingCircle_released");
    circleRef.current.classList.add("expandingCircle_held");
    circleRef.current.style.top=`${newY}px`
    circleRef.current.style.left=`${newX}px`
    
    
    onTouchStart && onTouchStart(e);
  },[ onTouchStart ])
  
  const onRelease = useCallback((e)=>{
    circleRef.current.classList.add("expandingCircle_released");
    circleRef.current.classList.remove("expandingCircle_held");
    
    
    
    onTouchEnd && onTouchEnd(e);
  },[ onTouchEnd ])
  
  return (
    <Button
      onClickAnimation="none"
      {...rest} 
    //  ref={e=>btnRef.current=e}
      style={style} 
      className={"utilityRippleButton "+className}
      onTouchStart={onTouch}
      onTouchEnd={onRelease}
    >
      {children}
      <div 
        ref={circleRef}
        style={{
          background : calculateBg(rippleColor),
          transitionDuration: `${duration}s` ,
        }} 
        className="utilityRippleButtonExpandingCircle"  
      />
    </Button>
  );
}

export default RippleButton;


function calculateBg(color){
  if(Array.isArray(color)){
    return `radial-gradient(${color.join(",")})`;
  }
  return color;
}





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                                         
                                                    