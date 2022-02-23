import './App.css';
import { useEffect } from "react";
import eruda from "eruda"
import {
  LandingScreen,
  ProjectsScreen,
  ContactScreen,
} from "./screens";
import {
  Footer
} from "components/custom"
import {
  Nav
} from "components/shared"


eruda.init()

function App() {
  
  return (
    <div className="App">
      {/*<Nav links={[ "Home", "Projects", "Contact" ]} />
      */}
      <LandingScreen />
      <ProjectsScreen />
      <ContactScreen />
      <Footer />
    </div>
  );
}

export default App;
