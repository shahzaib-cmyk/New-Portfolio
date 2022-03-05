import styles from "./MobileNavigationScreen.module.css";
import { memo, useEffect, useState } from "react";
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
  const [ visible, setVisible ] = useState(()=>isNavOpen);
  
  
  useEffect(() => {
    /* if(isNavOpen){
       setVisible(p=>true);
       /// In Animation stuff
     }
     else if (!isNavOpen) {
       /// Out Animation stuff
       setVisible(p=>false);
     }*/
     setVisible(p=>isNavOpen)
  } , [ isNavOpen ] )
  
  //if (!visible) return null;
    
  return (
    <div 
      style={style}
      className={`${styles.container} ${!isNavOpen ? styles.container_closed : ""} ${className}`}
    >
    { links.map((link,index)=>{

       console.log(`visible : ${isNavOpen}`);
       function scrollTo(i){
          window.location.hash=link;
       }
       
       return (
         <Button 
            onClick={()=>scrollTo(index)}
            name={link} 
            onClickAnimation="opacity" 
            style={{
              animationDelay:(((index+1)*50)+150)+"ms"
            }}
            className={`fadeIn_bottom ${styles.link} ${""/*isNavOpen ? styles.link_open : styles.link_closed */}`} 
            key={uuidv4()} >
           {link} 
         </Button>
       )
    }) }
    <div className={styles.socialLinksContainer} >
      <SocialLinks className={styles.socialLinks} color="dodgerblue" />
    </div>
    </div>
  );
}

export default memo(MobileNavigationScreen);











                                                         
                                                    