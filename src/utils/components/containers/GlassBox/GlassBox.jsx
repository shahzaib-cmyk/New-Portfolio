import styles from "./GlassBox.module.css";
import { memo } from "react";

function GlassBox({
    style,
    className="",
    children,
    ...rest
}) {
  

  return (
    <div 
     {...rest}
     style={style}
     className={`${styles.container} ${className}`}
    >
{children}
    </div>
  );
}

export default memo(GlassBox);











                                                         
                                                    