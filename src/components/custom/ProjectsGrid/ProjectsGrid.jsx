import styles from "./ProjectsGrid.module.css";
import { memo } from "react";
import { v4 as uuidv4 } from "uuid";
import ZarqoonAppImg from "assets/ZarqoonAppImg.jpg"
import LandingPageImage from "assets/LandingPage.jpg"
import SaffronSiteImg from "assets/SaffronSite.jpg"
import PrevPortfolioImg from "assets/PrevPortfolio.jpg"

const Projects = [
  {
    name: "Name",
    description:"An E-Commerce Restaurant App created with React-Native and Expo.",
    Component:()=><img style={{ width:"100%", heiggt:"100%", }} src={ZarqoonAppImg} />,
    link:"https://expo.dev/artifacts/4bf367c9-4ed1-4a57-b631-d76261977245",
  },
  {
    name: "Name",
    description:"A Responsive, Fully Animated LandingPage created with HTML,CSS and Javascript & GSAP3.",
    Component:()=><img style={{ width:"100%", heiggt:"100%", }} src={LandingPageImage} />,
    link:"https://fervent-hodgkin-4b922b.netlify.app/",
    
  },
  {
    name: "Name",
    description:"An E-Commerce site with an Animated Landing Page, Menu Page and Contact Page.",
    Component:()=><img style={{ width:"100%", heiggt:"100%", }} src={SaffronSiteImg} />,
    link:"https://saffron-site.herokuapp.com/",
    
  },
  {
    name: "Name",
    description:"My previous Portfolio.",
    Component:()=><img style={{ width:"100%", heiggt:"100%", }} src={PrevPortfolioImg} />,
    link:"https://adoring-bhabha-9b51a4.netlify.app/",
    
  },

  
]

function ProjectsGrid({
    style,
    className="",
    ...rest
}) {
  

  return (
    <div 
     style={style}
     className={`${styles.container} ${className}`}
    >
    {
     Projects.map((project,index)=>{
       const { Component, link, name, description } = project;
       console.log("Project component reendered");
       return (
         <a 
          href={link}
          target="_blank"
          key={uuidv4()} 
          className={`${styles.projectContainer}`} 
          description={description}
          index={index+1} >
          <Component />
          <div className={`absFill ${styles.overlay} `}   />
         </a>
       )
     })
     }
        
    </div>
  );
}

export default memo(ProjectsGrid);









                                                         
                                                    