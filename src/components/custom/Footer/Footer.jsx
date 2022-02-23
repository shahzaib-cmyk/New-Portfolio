import styles from "./Footer.module.css";
import { SocialLinks } from "components/basic";
import logoImage from "assets/completeLogo.png"
import { useSettings } from "data/contexts/hooks";

function Footer(props) {
  const {
    style,
    className="",
  } = props;
  
  const [ settings ] = useSettings();
  
  
  return (
    <div style={style} className={`${styles.container} ${className}`}
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
         <SocialLinks color={settings.colors.accent} className={styles.socialLinks}/>
      </div>
   </div>
    </div>
  );
}

export default Footer;











                                                         
                                                    