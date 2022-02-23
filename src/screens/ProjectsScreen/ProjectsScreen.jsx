import styles from './ProjectsScreen.module.css';
import {
  DiagonalBgText,
} from "components/basic"
function ProjectsScreen(props) {
  const {
    style,
  } = props;
  return (
    <div id="Projects" style={style} className={styles.screenContainer} >
      <h1>Projects</h1>
      <div className={styles.projectsGrid}  >   
       <div />
       <div />
       <div />
      </div>
    </div>
  );
}

export default ProjectsScreen;