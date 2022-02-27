import styles from "./RandomBalls.module.css";
import { memo } from "react";
import {
  randomNumber
} from "utils/functions"

function RandomBalls({
    style,
    className="",
    num = randomNumber(5,10),
    minWidth= window.innerWidth ,
    minHeight = window.innerHeight ,
    minRadius = 50 ,
    maxRadius = 150 ,
    ...rest
}) {
 
  const randomArr = Array(num).fill(0);
  
  return (
    <div 
     className={`absFill ${styles.container} ${className}`}
    >
    { randomArr.map(()=>{
    const radius = randomNumber(minRadius,maxRadius);
    
    return <div style={{ minHeight:radius+"px", minWidth:radius+"px", top: randomNumber(0,minHeight-radius), left: randomNumber(0,minWidth-radius), ...style}} className={styles.circles} />
    }) }
    </div>
  );
}

export default memo(RandomBalls);










                                                         
                                                    