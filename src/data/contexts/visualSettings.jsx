import {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

export const SettingsContext =createContext();

export const SettingsContextProvider = (props) =>{
  
   const [settings,setSettings] = useState(()=>({
     colors:{
       primary : "hsla(218.2,24.4%,8.8%,1)",
       secondary : "hsla(160.7,34.1%,66.1%,1)",
       accent : "hsla(0,59.5%,49.4%,1)",
       text : "hsla(0,0%,91.4%,0.95)",
     }
       
     }))
   
   useEffect(()=>{
     console.log("settings effect ran");
   }, [settings] )
   
    return (
      
      <SettingsContext.Provider value={[settings,setSettings]}>
       {props.children}
      </SettingsContext.Provider>
      
      )

}

export const useSettings = ()=>{
  const [ settings, setSettings ] = useContext(SettingsContext)
  return [ settings, setSettings ];
}











