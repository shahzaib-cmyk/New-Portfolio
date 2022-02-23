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
import {
  SettingsContextProvider,
} from "data/contexts"

eruda.init()

function App() {
  
  return (
    <SettingsContextProvider >
    <div className="App">
      {/*<Nav links={[ "Home", "Projects", "Contact" ]} />
      */}
      <LandingScreen />
      <ProjectsScreen />
      <ContactScreen />
      <Footer />
    </div>
    </SettingsContextProvider>
  );
}

export default App;
