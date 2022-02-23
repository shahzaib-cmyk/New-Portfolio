import styles from "./SocialLinks.module.css";
import { memo, useMemo, } from "react";
import { FaFacebook, FaLinkedinIn, FaTwitter, FaInstagram, } from 'react-icons/fa';
import { v4 as uuidv4 } from "uuid";
import {
  TouchableOpacity
} from "utils/components/containers"

const AvailableOptions = [
  {
    name:"twitter",
    icon: FaTwitter  ,
    link: "https://twitter.com/Shahzaib_cmyk?t=_Ia3bRgD74ufRQqXmWeU-A&s=09"
  },
  {
    name:"facebook",
    icon: FaFacebook ,
    link: "https://www.google.com/"
  },
  {
    name:"instagram",
    icon: FaInstagram ,
    link: "https://www.instagram.com/shah.zaib_cmyk"
  },
  {
    name:"linkedIn",
    icon: FaLinkedinIn ,
    link: "https://www.linkedin.com/in/shahzaib-khan-44248a225"
  },
  
]

function SocialLinks({
    style,
    className="",
    links="all",
    ...rest
}) {
  const iconsToShow = useMemo(()=>{
    if (links==="all") return AvailableOptions;
    if (!(Array.isArray(links))) throw "links prop needs to be an array in SocialLinks"
    
    return AvailableOptions.filter(option=>{
      const requested = links.find(l=>l===option.name)
      return requested;
    })
      
  },[ links ])
  
  
  
  
  return (
    <>
    {
      iconsToShow.map(({icon:Icon,link})=>{
        return (
          <TouchableOpacity key={uuidv4()} >
          <a href={link} className={styles.links} target="_blank" /* rel="noopener noreferrer" */ >
            <Icon style={{ margin:10}} size={20} color="rgb(161,43,67)" {...rest} />
          </a>
          </TouchableOpacity >
        )
      })
    }
    </>
  );
}

export default memo(SocialLinks);










                                                         
                                                    