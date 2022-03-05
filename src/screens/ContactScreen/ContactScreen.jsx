import styles from './ContactScreen.module.css';
import { DiagonalBgText } from "components/basic";
import { useCallback, } from "react";
import { useInView } from 'react-intersection-observer';
import MapImage from "assets/mapImage.jpg";
import {
  Button,
} from "utils/components"

function ContactScreen(props) {
  const {
    style,
  } = props;
  
  const { ref, inView, entry } = useInView({
    threshold:"0.25",
  });
  
  const submitForm = useCallback((e)=>{
    e.preventDefault();
    console.log(e.target);
    console.log("Form submitted");
  
    const data={ msg : "Yoooooo admin"};
    
    fetch("http://127.0.0.1:8080/general/emailAdmin",{
      method: 'POST',
     // mode: 'cors',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(res=>res.text())
    .then(data=>console.log(`data ${data}`))
    .catch(e=>console.log(e))
  
  } , [] )
  
  return (
    <div id="Contact" ref={ref} style={style} className={styles.screenContainer} >
      <h5 className={`${styles.contactHeading}  ${inView ? "fadeIn_bottom" : ""}`} >Contact</h5>
      <DiagonalBgText className={styles.bgText} invert style={{ textShadow: `-3px 1px 3px black` }} color="accent" />
      <div className={styles.screenBody}  >   
        <div className={`${styles.column1} ${inView ? "clip_bottom" : ""}`}   > 
       {/*  <h5 className={styles.contactHeading} >Contact</h5>  */}
         <form onSubmit={submitForm} className={styles.form} >
           <label className={styles.labels} htmlFor="name" >Name</label>
           <input className={styles.inputs} id="name" type="text" />
           <label className={styles.labels} htmlFor="message" >Message</label>
           <textarea className={styles.inputs} id="message" rows={5} cols={5} type="textarea" />
           <Button className={styles.btn} type="submit" onClickAnimation="opacity bounce" >Submit</Button>
         </form>
        </div>
        <div className={`${styles.column2} `}   >   
          <div className={styles.emailAndPhoneContainer}   >   
             <h3 className={styles.headings} >E-mail</h3>
             <p className={styles.paras} >shahzaibkhanwebdev@gmail.com</p>
             <h3 className={styles.headings} >Phone</h3>
             <p className={styles.paras}>+923451358620</p>
          </div>
        </div>
      
       {/* <div  className={`${styles.column2}`} />
       {/*
       <div className={`${styles.column2} ${inView ? styles.columnOpen : ""}`}   >  
         <img className={`absFill ${styles.mapImage}`}  src={MapImage} />
        </div>
       */}
      </div>
    </div>
  );
}

export default ContactScreen;
