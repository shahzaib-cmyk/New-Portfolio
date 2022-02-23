
function absoluteFill() {
  return {
    position:"absolute",
    top:0,
    left:0,
    bottom:0,
    right:0,
  }
}

function getClassBasedOnProps(props) {
  const { primary, secondary, accent, text } = props;
  return primary ? "primary" :
         (secondary ? "secondary " : 
         (accent ? "accent" :
         text ? "text" : ""))
}
















export {
  getClassBasedOnProps,
  absoluteFill,
}














//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////