import styles from './ContactScreen.module.css';
import { DiagonalBgText } from "components/basic";
import { useInView } from 'react-intersection-observer';


function ContactScreen(props) {
  const {
    style,
  } = props;
  
  const { ref, inView, entry } = useInView();
  
  return (
    <div id="Contact" ref={ref} style={style} className={styles.screenContainer} >
      <DiagonalBgText className={styles.bgText} invert style={{ textShadow: `-3px 1px 3px black` }} color="accent" className={styles.bgText} />
      <div className={styles.screenBody}  >   
        <div className={`${styles.column1} ${inView ? styles.columnOpen : ""}`}   > 
        
        </div>
        <div className={`${styles.column2} ${inView ? styles.columnOpen : ""}`}   >  
        
        </div>
      </div>
    </div>
  );
}

export default ContactScreen;
