import './App.css';
import { useEffect, useRef, lazy, Suspense } from "react";
import eruda from "eruda"
import {
  LandingScreen,
 /* ProjectsScreen, 
  ContactScreen,*/
} from "./screens";
import {
  randomNumber,
  onlyInDevelopment,
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
//import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

onlyInDevelopment(()=>{
  eruda.init();
  console.log("Running in development mode");
})

const ProjectsScreen = lazy(()=>import("./screens/ProjectsScreen/ProjectsScreen.jsx"));

/*
const ProjectsScreen = lazy(()=>{
  return new Promise(resolve=>setTimeout(resolve,5*1000)).then(
  ()=> import("./screens/ProjectsScreen/ProjectsScreen.jsx"));
  });
*/

const ContactScreen = lazy(()=>import("./screens/ContactScreen/ContactScreen.jsx"));

function App() {
  
  const containerRef = useRef(null)
  return (
    <SettingsContextProvider >
      <div data-scroll-container ref={containerRef} className="App">
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