import './App.css';
import './App.css';
import { useEffect, lazy, Suspense } from "react";
import eruda from "eruda"
import {
  LandingScreen,
 /* ProjectsScreen, 
  ContactScreen,*/
} from "./screens";
import {
  randomNumber
} from "utils/functions"
import {
  Footer
} from "components/custom"
import {
  Nav
} from "components/shared"
import {
  SettingsContextProvider,
} from "data/contexts"

eruda.init()

const ProjectsScreen = lazy(()=>import("./screens/ProjectsScreen/ProjectsScreen.jsx"));

/*
const ProjectsScreen = lazy(()=>{
  return new Promise(resolve=>setTimeout(resolve,5*1000)).then(
  ()=> import("./screens/ProjectsScreen/ProjectsScreen.jsx"));
  });
*/

const ContactScreen = lazy(()=>import("./screens/ContactScreen/ContactScreen.jsx"));

function App() {
  
  return (
    <SettingsContextProvider >
    <div className="App">
      {/*<Nav links={[ "Home", "Projects", "Contact" ]} />
      */}
      <LandingScreen />
      <Suspense fallback={<Fallback />} >
        <ProjectsScreen />
        <ContactScreen />
      </Suspense>
      <Footer />
    </div>
    </SettingsContextProvider>
  );
}

export default App;


const Fallback = (props)=>{
  return (
  <section className={"fallbackUI"}>
     <h1>Loading...</h1>
  </section>
  )
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////