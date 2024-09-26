import rimac_nevera from "../assets/img/rimac_nevera.jpg";
import PropTypes from "prop-types";


export const RimacNevera = ( { className } ) => {
  return (
    <img src={ rimac_nevera } alt="Coche Corvette C9 color naranja" className={ className }/>
  )
}

RimacNevera.propTypes = {
    className: PropTypes.string,
}
