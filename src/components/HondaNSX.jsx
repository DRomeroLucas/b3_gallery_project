import honda_nsx from "../assets/img/honda_nsx.jpg";
import PropTypes from "prop-types";


export const HondaNSX = ( { className } ) => {
  return (
    <img src={ honda_nsx } alt="Honda NSX rojo" className={ className }/>
  )
}

HondaNSX.propTypes = {
    className: PropTypes.string,
}
