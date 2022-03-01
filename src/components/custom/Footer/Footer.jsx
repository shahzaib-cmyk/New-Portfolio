import { memo } from "react";
import styles from "./Footer.module.css";
import { SocialLinks } from "components/basic";
import logoImage from "assets/completeLogo.png"
import { useSettings } from "data/contexts/hooks";
import { useInView } from 'react-intersection-observer';
import {
  FaCode
} from "react-icons/fa"
import {
  TouchableOpacity,
} from "utils/components/containers"

function Footer(props) {
  const {
    style,
    className="",
  } = props;
  
  const [ settings ] = useSettings();
  const { ref, inView, entry } = useInView();
  
  
  return (
    <div ref={ref} style={style} className={`${styles.container} ${className}`}
    >
    <div className={styles.column1}   >
      <div className={styles.emailAndPhoneContainer}   >   
         <h3 className={styles.headings} >E-mail</h3>
         <p className={styles.paras} >shahzaibkhanwebdev@gmail.com</p>
         <h3 className={styles.headings} >Phone</h3>
         <p className={styles.paras}>+923451358620</p>
      </div>
    </div>
    <div className={styles.column2}   >   
      <div className={styles.socialsContainer}   >   
         <SocialLinks color={settings.colors.accent} className={`${styles.socialLinks} ${inView ? "fadeIn_bottom" : "" }`}/>
      </div>
      <div className={`${styles.codeLinkContainer}`}   >   
      <p>The Code for this Site {inView ? "inView" :"isjj"}</p>
      <TouchableOpacity >
        <a style={{ display:"block" }} href="https://github.com/shahzaib-cmyk/New-Portfolio" >
          <FaCode className={`${styles.codeLink} ${inView ? "fadeIn_center" : ""}`} style={{ margin:10 }} size={55} color={settings.colors.primary} />
        </a>
      </TouchableOpacity>
      </div>
   </div>
    </div>
  );
}

export default memo(Footer);











                                                         
                                                    