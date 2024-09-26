import chevrolet_corvette_c8 from "../assets/img/chevrolet_corvette_c8.jpg";
import PropTypes from "prop-types";


export const Corvette = ( { className } ) => {
  return (
    <img src={ chevrolet_corvette_c8 } alt="Coche Corvette C8 color naranja" className={ className }/>
  )
}

Corvette.propTypes = {
    className: PropTypes.string,
}
