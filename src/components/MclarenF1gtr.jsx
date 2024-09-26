import mclaren_f1gtr from "../assets/img/mclaren_f1gtr.jpg";
import PropTypes from "prop-types";


export const MclarenF1gtr = ( { className } ) => {
  return (
    <img src={ mclaren_f1gtr } alt="Coche Corvette C9 color naranja" className={ className }/>
  )
}

MclarenF1gtr.propTypes = {
    className: PropTypes.string,
}
