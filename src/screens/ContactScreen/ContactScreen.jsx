import styles from './ContactScreen.module.css';
import { DiagonalBgText } from "components/basic";


function ContactScreen(props) {
  const {
    style,
  } = props;
  return (
    <div id="Contact" style={style} className={styles.screenContainer} >
      <DiagonalBgText className={styles.bgText} invert style={{ textShadow: `-3px 1px 3px black` }} color="accent" className={styles.bgText} />
      <div className={styles.screenBody}  >   
        <div className={styles.column1}   > 
        
        </div>
        <div className={styles.column2}   >  
        
        </div>
      </div>
    </div>
  );
}

export default ContactScreen;
