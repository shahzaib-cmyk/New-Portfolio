import styles from "./ImagesSphere.module.css";
import { memo, useMemo, useState, useEffect } from "react";
import { imageArr } from "assets/selfImages";
import {
  randomNumber
} from "utils/functions";
import { v4 as uuidv4 } from "uuid";
import { useInView } from 'react-intersection-observer';



const radius = 130;
const Images = [
  {
    src:imageArr[0],
    top:`-${radius/2}%`,
    left:`-${radius}%`,
    scale:1,
    zIndex:1,
  },
  {
    src:imageArr[1],
    top:`-${radius*1.10}%`,
    left:`0%`,
    scale:1,
    zIndex:-1,
  },
  {
    src:imageArr[6],
    top:`${radius*1.10}%`,
    left:`0%`,
    scale:1,
    zIndex:-1,
  },
  {
    src:imageArr[3],
    top:`${radius/2}%`,
    left:`${radius}%`,
    scale:1,
    zIndex:1,
  },
  {
    src:imageArr[4],
    top:`-${radius/2}%`,
    left:`${radius}%`,
    scale:1,
    zIndex:-1,
  },
  {
    src:imageArr[5],
    top:`${radius/2}%`,
    left:`-${radius}%`,
    scale:1,
    zIndex:-1,
  },

]


function ImagesSphere({
    style,
    className="",
    ...rest
}) {
  console.log("ImagesSphere rendered");
  return (
    <div 
     style={style}
     className={`${styles.container} ${className}`}
    >
    <div className={`${styles.centerSphere}`}   >
      { Images.map((props,index)=>{
        return <Image  index={index} key={uuidv4()} {...props} />
      }) }
    </div>
    </div>
  );
}

const Image = (props)=>{
   
   const {  index, src, top, left, zIndex} = props;
    const [ transform, setTransform ] = useState(()=>({
      x:0,
      y:0,
    }))
    /*
    useEffect(()=>{
     const duration = randomNumber(2,4)* 1000;
     const offset = 5;
     const interval = setInterval(()=>{
       setTransform(()=>({ 
           x:randomNumber(-offset,offset)+"%",
           y:randomNumber(-offset,offset)+"%",
       }))
     }, duration)
      return ()=>clearInterval(interval);
    }, [])
    */
    return (
     <div
       className={`clip_bottom ${styles.imgContainer}`}
       style={{  zIndex, top, left, transform:`translate(${transform.x},${transform.y})` }} 
      >   
       <img style={{ animationDelay:(((index+1)*200)+1000)+"ms", }} src={src} className={styles.images} />
     </div>
    )
}
export default memo(ImagesSphere);











                                                         
                                                    