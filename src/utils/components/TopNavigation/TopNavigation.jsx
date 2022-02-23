import styles from './TopNavigation.module.css';
import BurgerMenuToggle from "../BurgerMenuToggle/BurgerMenuToggle.jsx";
import { v4 as uuidv4 } from 'uuid';
import { useCheckMobileScreen } from "utils/hooks"

function TopNavigation(
  { noBurgerMenu = false,
    style,
    logo,
    renderItem,
    onPress,
    className='',
   // noBurgerMenu=false,
    links=[],
    ...rest
  }) {
  
  
  const isMobile = useCheckMobileScreen();
  
  return (
    <div {...rest} style={style} className={`${styles.container} ${className}`} >
      { logo && <img className={styles.logo} src={logo} /> }
      <div className={styles.linksContainer} >
       { links.map((link,index)=>{
         return renderItem 
              ? renderItem?.(link,index,{ className : styles.links , key: uuidv4()})
              : <button key={uuidv4()} onClick={()=>onPress?.(link)} href={`#${link}`} className={styles.links} >{link}</button>
       }) }
      </div>
      { isMobile && !noBurgerMenu && <BurgerMenuToggle  /> }
  
    </div>
    )
}




export default TopNavigation;
