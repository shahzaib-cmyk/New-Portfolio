import styles from "./ToolTip.module.css";

function ToolTip(props) {
  const {
    style,
    className,
  } = props;
  return (
    <div 
     style={style}
     className={`${styles.container} ${className}`}
    >
          
    </div>
  );
}

export default ToolTip;











                                                         
                                                    