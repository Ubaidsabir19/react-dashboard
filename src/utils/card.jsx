import PropTypes from 'prop-types';

const Card = ({ icon, heading, text }) => {
  return (
    <div className={`border rounded-lg p-4 flex-1 min-w-[200px] flex items-center`}>
      {icon}
      <div className="flex flex-col ml-4">
        <h2 className="text-lg font-semibold mb-2">{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  icon: PropTypes.element.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,

};

export default Card;
