import styles from "./MobileNavigationScreen.module.css";
import { memo, useEffect, useCallback, useState } from "react";
import { v4 as uuidv4} from "uuid";
import {
  Button,
  RippleButton,
} from "utils/components";
import {
  SocialLinks,
} from "components/basic"
import {
  getClassBasedOnProps
} from "utils/functions"

function MobileNavigationScreen({
    style,
    className="",
    links=[],
    isNavOpen,
  ...rest
}) {
  /*
  const [ visible, setVisible ] = useState(()=>isNavOpen);
  
  
  useEffect(() => {
    if(isNavOpen){
       setVisible(p=>true);
       /// In Animation stuff
     }
     else if (!isNavOpen) {
       /// Out Animation stuff
       setVisible(p=>false);
     }
     
  } , [ isNavOpen ] )
  */
  //if (!isNavOpen) return null;
    
  return (
    <div 
      style={style}
      className={`${styles.container} ${!isNavOpen ? styles.container_closed : ""} ${className}`}
    >
    { links.map((link,index)=>{

       
       const scrollTo = ()=>{
          window.location.hash=link;
       }
       
       return (
         <div 
           key={uuidv4()} 
           style={{
              opacity:0,
              animationDelay:(((index+1)*100)+150)+"ms",
           }}
           className={`${styles.cover} fadeIn_bottom`} >
         <Button 
            onClick={()=>scrollTo(index)}
            name={link} 
            onClickAnimation="opacity" 
            className={`${styles.link}`} 
            key={uuidv4()} >
           {link} 
         </Button>
         </div>
       )
    }) }
    <div className={styles.socialLinksContainer} >
      <SocialLinks className={styles.socialLinks} color="dodgerblue" />
    </div>
    </div>
  );
}

export default memo(MobileNavigationScreen);











                                                         
                                                    