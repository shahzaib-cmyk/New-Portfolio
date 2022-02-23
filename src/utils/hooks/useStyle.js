//React imports
import {
  useMemo,
} from "react"

function useStyle(style,...args){
 
 return useMemo(()=>style(...args),[...args])
  
}

export default useStyle




