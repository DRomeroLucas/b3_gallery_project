import koegnisegg_ccx from "../assets/img/koegnisegg_ccx.jpg";
import PropTypes from "prop-types";


export const KoegniseggCCX = ( className ) => {
  return (
    <img src={ koegnisegg_ccx } alt="Koegnisegg CCX gris" className={ className }/>
  )
}

KoegniseggCCX.propTypes = {
    className: PropTypes.string,
}
