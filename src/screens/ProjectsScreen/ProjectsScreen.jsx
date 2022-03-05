import styles from './ProjectsScreen.module.css';
import {
  DiagonalBgText,
  RandomBalls,
} from "components/basic";
import {
  ProjectsGrid
} from "components/custom"
import { v4 as uuidv4 } from "uuid";
import { useInView } from 'react-intersection-observer';
import AppImage from "assets/Zarqoon_app_image.jpg";


function ProjectsScreen(props) {
  const {
    style,
  } = props;
  
  const { ref, inView, entry } = useInView({
    threshold:"0.25",
  });
  
  
  return (
    <section id="Projects" ref={ref} style={style} className={styles.screenContainer} >
      <h1 className={`${styles.headingOpen} ${inView ? "fadeIn_bottom" : "" }`}>Projects</h1>
     {/* <RandomBalls />  */ }
      <ProjectsGrid />
     {/*
      <div className={styles.projectsGrid} >   
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
             </a>
           )
         })
       }
      </div>
      */}
    </section>
  );
}
/*
function LinkHOC(Component,link) {
  return (props)=>{
    return (
      <a 
        href={link}
        target="_blank"
        key={uuidv4()} 
        className={`${styles.projectContainer}`} 
        description={description}
        index={index+1} >
        <Component {...props} />
       </a>
    )
  }
}*/



function TestComp (props){
  return <img style={{height:"100%",}} src={AppImage}  />
}


export default ProjectsScreen;
