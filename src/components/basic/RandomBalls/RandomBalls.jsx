import styles from "./RandomBalls.module.css";
import { memo, useMemo, } from "react";
import {
  randomNumber
} from "utils/functions";
import { v4 as uuidv4 } from "uuid";


function RandomBalls({
    style,
    className="",
    num = randomNumber(5,10),
    minWidth  = window.innerWidth ,
    minHeight = window.innerHeight ,
    minRadius = 50 ,
    maxRadius = 150 ,
    ...rest
}) {
 
  const randomArr = useMemo(()=>{
    const prevProps = [];
    const arr = [];
    for (let i = 0; i <= num ; i++) {
      const radius = randomNumber(minRadius,maxRadius);
      let newBall = {
         radius,
         top : randomNumber(0,minHeight-radius),
         left : randomNumber(0,minWidth-radius),
      }
      while(compareProps(newBall,prevProps)){
        newBall = {
         radius ,
         top : randomNumber(0,minHeight-radius),
         left : randomNumber(0,minWidth-radius),
        }
      } 
      prevProps.push(newBall);
      arr.push(newBall)
    }
    return arr;
  }, [] ) 
  
  return (
    <div 
     className={`absFill ${styles.container} ${className}`}
    >
    { randomArr.map(({top,left,radius})=>{
    return <div key={uuidv4()} style={{ minHeight:radius+"px", minWidth:radius+"px", top , left, ...style}} className={styles.circles} />
    }) }
    </div>
  );
}

export default memo(RandomBalls);

function compareProps(props,prevProps) {
  let exists = false;
  const spacing = 10 ;
  const { top, left, radius } = props;
  exists = prevProps?.find(prop=>{
                return (top >= prop.top - spacing && top <= prop.top + prop.radius + spacing ) 
                       && (left >= prop.left - spacing && left <= prop.left + prop.radius + spacing)
           });
  return exists;
}








                                                         
                                                    