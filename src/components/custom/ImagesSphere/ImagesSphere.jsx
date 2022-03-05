import styles from "./ImagesSphere.module.css";
import { memo, useMemo, useState, useEffect } from "react";
import { imageArr } from "assets/selfImages";
import {
  randomNumber
} from "utils/functions";
import { v4 as uuidv4 } from "uuid";


function ImagesSphere({
    style,
    className="",
    ...rest
}) {
  const Images = useMemo(()=>imageArr.map((image)=>{
    const imageRadius = 80;
    return {
      src:image,
      top:randomNumber(30,80)+"%",
      left:randomNumber(0,70)+"%",
      scale:randomNumber(1,1.25),
    }
  }), [] );

  return (
    <div 
     style={style}
     className={`${styles.container} ${className}`}
    >
    { Images.map(props=>{
      return <Image key={uuidv4()} {...props} />
    }) }
          
    </div>
  );
}

const Image = (props)=>{
   const { src, top, left, scale } = props;
    const [ transform, setTransform ] = useState(()=>({
      x:0,
      y:0,
    }))
    useEffect(()=>{
     const duration = 2 * 1000;
     const offset = 20;
     const interval = setInterval(()=>{
       setTransform(()=>({ 
           x:randomNumber(-offset,offset)+"%",
           y:randomNumber(-offset,offset)+"%",
       }))
     }, duration)
      return ()=>clearInterval(interval);
    }, [])
    
    return (
     <img src={src} style={{ top, left, transform:`scale(${scale}) translate(${transform.x},${transform.y})` }} className={styles.images} />
    )
}
export default memo(ImagesSphere);











                                                         
                                                    