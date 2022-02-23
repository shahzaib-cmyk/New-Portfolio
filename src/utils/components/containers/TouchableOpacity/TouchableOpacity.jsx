import {
  useRef
} from "react"
import './TouchableOpacity.css';

function TouchableOpacity(props) {
  const {
    style,
    className="",
    children,
    transition=0.15,
    onTouchStart,
    onTouchEnd,
  } = props;
  const containerRef = useRef();
  
  const onTouch = (e)=>{
      containerRef.current.classList.add("utilityTouchableOpacity_opacity")
      onTouchStart && onTouchStart(e);
    
  }
  const onRelease = (e)=>{
      containerRef.current.classList.remove("utilityTouchableOpacity_opacity")
      onTouchEnd && onTouchEnd(e);
  }
  
  return (
    <div 
      {...props} 
      className={"utilityTouchableOpacity "+className}
      style={{ ...style, transition:`${transition}s`}}
      ref={containerRef} 
      onTouchStart={onTouch} 
      onTouchEnd={onRelease} 
    >
      {children}
    </div>
  );
}

export default TouchableOpacity;











                                                         
                                                    