import styles from  './MovableBox.module.css';
import {
  useRef,
  useState,
  useCallback,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";

function MovableBox(props,outerRef) {
  const {
    style={},
    position,
    className="",
    children,
  } = props;
  
  const [ initialPos , setInitialPos ] = useState(()=>position);
  
  const ref = useRef();
  const origin = useRef(undefined)
  ;
  const moveToPos = useCallback(({ top, left })=>{
    overrideInitialPos()
    ref.current.style.transitionDuration = 200+"ms";
    ref.current.style.top = top+"px";
    ref.current.style.left = left+"px";
    
  },[])
  
  useImperativeHandle(outerRef,
  ()=>({
      moveToPos,
  }))

  const drag = useCallback((e)=>{
    e.stopPropagation();
    e.nativeEvent.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    e.preventDefault();
    e.nativeEvent.preventDefault();
    const {
      x: posX,
      y: posY,
      width,
      height,
    } = origin.current;
    const {
      clientX,
      clientY,
    } = e.touches[0];
    let newX =  clientX - (width/2)  // - posX;
    let newY =  clientY - (height/2) // - posY;
    
    
    ref.current.style.transitionDuration = 0+"ms";
    ref.current.style.top = newY+"px";
    ref.current.style.left = newX+"px";
    
    //ref.current.style.transform = `translate(${newX}px,${newY}px)`;
    
    overrideInitialPos();
    
  }, [initialPos]);
  const overrideInitialPos = useCallback(()=>{
    if (!initialPos) return;
    console.log("initialPos updated",initialPos);
    setInitialPos(()=>undefined);
  }, [ initialPos ])
  
  const updateOrigin = useCallback((e)=>{
    
    document.body.style.overflow='hidden';
    e.stopPropagation();
    origin.current = ref.current.getBoundingClientRect();

  }, [])
  
  return (
   <div 
     ref={ref}
     style={{ ...initialPos, ...style }}
     onTouchStart={updateOrigin}
     onTouchEnd={()=>{ document.body.style.overflow='auto'; }}
     onTouchMove={drag}
     className={`${styles.movableBox} ${className}`}
    >
    {children}
    </div>
  );
}

export default forwardRef(MovableBox);










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                                         
                                                    