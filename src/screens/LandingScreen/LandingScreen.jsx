import { useRef } from "react"
/*
import "../../App.css"
*/
import styles from './LandingScreen.module.css';
import {
  Nav 
} from "../../components/shared";
import {
  Button,
  RippleButton,
  SplitText,
  BurgerMenuToggle,
} from "utils/components";
import {
  MovableBox,
  TouchableOpacity,
} from "utils/components/containers"
import {
  useLocalStorage,
} from "utils/hooks"
import {
  DiagonalBgText,
} from "components/basic"
import portrait from "assets/portraitPicSquare.png"


function LandingScreen(props) {
  const {
    style,
  } = props;
  const [ count , setCount ] = useLocalStorage("count",0);
  const temRef = useRef();

  

  return (
    <div id="Home" style={style} className={`${styles.screenContainer}`} >
          <Nav links={[ "Home", "Projects", "Contact",]} />
          <DiagonalBgText className={styles.bgText} />
          <div className={styles.screenBody}   >   
          <div className={`${styles.textContainer}`}   >   
            <h1 className={`${styles.headings}`} >Hello,
            I'm <br /> Shahzaib Khan</h1>
            <p className={`${styles.paras} fadeIn_bottom`} >I Design and Develop Beautifull Animated <br />Web Experiences</p>
          </div>
          <div className={`${styles.imgContainer} fadeIn_center`}   >   
            <img className={styles.image} src={portrait} />
          </div>
          { /*
            <MovableBox ref={e=>{
              temRef.current=e
            }} position={{ right:10, top:0}} >
               <BurgerMenuToggle lineColor="white" style={{  height:50,width:50, borderRadius:"50%", }} />
            </MovableBox>
          */ }
          </div>
    </div>
  );
}

export default LandingScreen;

function absoluteFill(config={}) {
  return {
    position:"absolute",
    top:0,
    bottom:0,
    left:0,
    right:0,
    ...config
  }
}

