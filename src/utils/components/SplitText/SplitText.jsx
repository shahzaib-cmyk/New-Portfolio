import './SplitText.css';
import {
  useMemo,
  useRef,
  useEffect,
} from "react"
import { v4 as uuidv4 } from "uuid";

function SplitText(props) {
  const {
    style,
    text="",
    initialDelay=1000,
    offSet=200,
    byLetter=true,
    byWord=false,
    spacer=" ",
    className,
  } = props;
  
  const textFragments = useMemo(()=>{
    if (!!byLetter) return text.split("");
    if (!!byWord) return text.split(spacer);
  }, [ byWord, byLetter ]);
  
  return (
    
    <div 
      {...props}
      style={undefined}
      className={"utilitySplitTextComponent "+className}
    >
    { textFragments.map((letter,index)=>{
      return <TextPiece
               style={style}
               key={uuidv4()}
               index={index}
               initialDelay={initialDelay}
               duration={`${(index+1)*offSet}ms`}
               letter={letter}
              />
    }) }
    </div>
    
  );
}

const TextPiece = (props)=>{
  const {
    letter,
    style={},
    duration,
    index,
    initialDelay,
  }= props;
  const ref = useRef();
  
  useEffect(()=>{
    
      ref.current.classList.add("bruh")
  
  }, [] )
  return <span 
          style={{ transitionDelay:`${duration}`, transitionDuration: 0.5+"s" , ...style}}
          ref={ref}
          className={`letter ${letter===" " ? "space" : ""} ${index%2==0?"even":"odd"}`}
        >
         {letter}
         </span>
}


export default SplitText;









                                                         
                                                    