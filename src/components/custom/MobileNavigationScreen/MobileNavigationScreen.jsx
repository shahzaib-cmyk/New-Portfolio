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
  const [ visible, setVisible ] = useState(()=>false);
  
  
  useEffect(() => {
     if(isNavOpen){
       setVisible(p=>true);
       /// In Animation stuff
     }
     if (!isNavOpen) {
       /// Out Animation stuff
       setVisible(p=>false);
     }
  } , [ isNavOpen ] )
  
  if (!visible) return null;
    
  return (
    <div 
      style={style}
      className={`${styles.container} ${visible ? "container_open" : ""} ${className}`}
    >
    { links.map((link,index)=>{
        /* <a name={link}  href={`#${link}`} className={styles.link}  >
         <Button onClick={()=>window.scrollTo(200,200)} name={link} onClickAnimation="opacity" className={styles.linkBtn} /* className={`${styles.link}`}  key={uuidv4()} >
        /*   {link} 
         </Button>
         </a> */
         function scrollTo(i){
           window.location.hash=link;
        //   window.scrollTo(0,window.innerHeight*i+50);
         }
       return (
         <Button onClick={()=>scrollTo(index)} name={link} onClickAnimation="opacity"  className={`${styles.link}`}  key={uuidv4()} >
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











                                                         
                                                    