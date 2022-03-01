
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

function randomNumber(min,max) {
  return Math.floor(Math.random()*(max-min+1)) + min
}


function select(arg={}) {
  const { dev, prod } = arg;
  if (!dev || !prod) throw "False args provided to select utility function"
  return isProduction()
       ? prod
       : dev;
}

function isProduction() {
  return process.env.NODE_ENV === "production";
}
function onlyInDevelopment(cb) {
  return !isProduction()
       ? cb?.()
       : null;
}











export {
  getClassBasedOnProps,
  absoluteFill,
  randomNumber,
  onlyInDevelopment,
  isProduction,
  select,
}














//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////