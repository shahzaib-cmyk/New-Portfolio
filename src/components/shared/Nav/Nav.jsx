import './Nav.css';
import { useState, useEffect } from "react";
import logoImage from "assets/otherlogo.png"
import {
  MobileNavigationScreen,
} from "components/custom"
import {
  TopNavigation,
  Button,
  BurgerMenuToggle,
} from "utils/components"
import {
  useStyle,
  useCheckMobileScreen,
} from "utils/hooks"

function Nav(props) {
  const {
    style,
    links=[],
  } = props;
  const [ brgColor , setBrgColor ] = useState(()=>"white");
  const [ navOpen , setNavOpen ] = useState(()=>false);
  const isMobile = useCheckMobileScreen();
  
  const Styles = useStyle(stylesFunc,isMobile);

  return (
    <>
    <TopNavigation
        noBurgerMenu
        logo={logoImage}
        id="navContainer"
        //links={links}
        onPress={link=>console.log(link)}
        renderItem={(link,i,{key})=><Button key={key} className="link" onClickAnimation="bounce opacity" >{link}</Button>}
    />
    <BurgerMenuToggle onChange={state=>setNavOpen(p=>state)} style={Styles.brgMenu} lineColor={brgColor} className={"brgMenu"} />
    <MobileNavigationScreen isNavOpen={navOpen} links={links} />

    </>
  );
}

export default Nav;

const stylesFunc = (isMobile)=>({
  brgMenu:{
    // Custom burger menu on top so it is visible everywhere
    position: "fixed", 
    left:"auto", 
    top:0,
    right: 10, 
    height:50,
    width:50,
   // zIndex:!isMobile ? -1 : 0
  },
  
})
  



function isString(arg) {
  return typeof arg === 'string' || arg instanceof String
}
