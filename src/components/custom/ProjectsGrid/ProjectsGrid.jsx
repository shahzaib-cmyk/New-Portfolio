import styles from "./ProjectsGrid.module.css";
import { memo } from "react";
import { v4 as uuidv4 } from "uuid";


const Projects = [
  {
    name: "Name",
    description:"A really long description about the project explaining a bunch of stuff about the project ",
    Component: null,
    link:"https://www.google.com",
  },
  {
    name: "Name",
    description:"Some description about the project",
    Component: null,
    link:"https://www.google.com",
  },
  {
    name: "Name",
    description:"Some description about the project",
    Component: null,
    link:"https://www.google.com",
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
          {/*<Component />*/}
         </a>
       )
     })
     }
        
    </div>
  );
}

export default memo(ProjectsGrid);









                                                         
                                                    