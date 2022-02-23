import './Square.css';

function Square(props) {
  const {
    style,
    className,
    children,
  } = props;
  return (
    <div 
      className="utilityResponsiveSquare"
     >
      <div {...props} className={"utilityResponsiveSquare_inner "+className}   >   
       {children}
      </div>
    </div>
  );
}

export default Square;











                                                         
                                                    