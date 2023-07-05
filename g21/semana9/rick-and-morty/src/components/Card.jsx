import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Card = ({ url, title, subtitle, text1, text2 }) => {
  return (
    <div className="rounded-2xl overflow-hidden flex flex-col">
      <div className="h-full p-4 bg-sky-900 flex flex-col gap-2">
        <Link to={url}>
          <h3 className="text-2xl font-bold">{title}</h3>
        </Link>
        <h4 className="text-base font-semibold">{subtitle}</h4>
        <h5 className="text-sm text-gray-400">{text1}</h5>
        <h5 className="text-sm text-gray-400"><span className="font-bold">Creado:</span> {text2}</h5>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};