import styles from "./DiagonalBGText.module.css";
import { memo, useMemo, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  useCheckMobileScreen,
} from "utils/hooks"

const strings = [
  "React",
  "Web development",
  "Shahzaib Khan",
  "React Native",
  "Web Design",
  "Portfolio",
  "Shahzaib Khan",
  ]
  
function DiagonalBGText({
    style,
    className="",
    angle="45deg",
    color="primary",
    invert=false,
    ...rest
}) {
  /*
  const [ onScreen, setOnScreen ] = useState(()=>false);
  useEffect(()=>{
    setOnScreen(()=>true)
  }, [] )
  */
  
  const calculatedAngle = useMemo(()=>{
    console.log("DiagonalBGText angle recalculated");
    const adjacent = window.innerWidth;
    const opposite = window.innerHeight;
    const angleRad = Math.atan(opposite / adjacent)
    let angleDeg = angleRad * 180 / Math.PI;
    console.log(angleDeg);
    if (invert) {
      angleDeg *= -1;
    }
    angleDeg < 0 ? angleDeg +=10 : angleDeg -=10
    return angleDeg+"deg"
    
  }, [] )
  
  
  
  return (
    <div 
    {...rest} 
     style={{ [`--angle`]: calculatedAngle  , }}
     className={`${styles.textContainer} ${className}`}
    >
    { strings.map(s=>{
      return <span style={style} key={uuidv4()} className={`${styles.text} ${styles[`clr-${color}`]}`} >{s}</span>
    }) }
    
    </div>
  );
}

export default memo(DiagonalBGText);











                                                         
                                                    