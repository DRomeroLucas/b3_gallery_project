import pagani_utopia from "../assets/img/pagani_utopia.jpg";
import PropTypes from "prop-types";


export const PaganiUtopia = ( { className } ) => {
  return (
    <img src={ pagani_utopia } alt="Un pagani utopia color gris" className={ className }/>
  )
}

PaganiUtopia.propTypes = {
    className: PropTypes.string,
}
