import PropTypes from 'prop-types';

export const ChildrenPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]).isRequired;

export const EventPropType = PropTypes.shape({
  artist: PropTypes.string.isRequired,
  city: PropTypes.string,
  date: PropTypes.string.isRequired,
  eventStartDate: PropTypes.string.isRequired,
  monthYear: PropTypes.string.isRequired,
  time: PropTypes.string,
  guests: PropTypes.string,
  venue: PropTypes.string,
  url: PropTypes.string,
});
