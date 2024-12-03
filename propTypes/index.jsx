import PropTypes from "prop-types";

// Define prop types for scene components
export const scenePropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export const GameLinkPropTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
