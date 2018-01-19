import PropTypes from 'prop-types'

const { arrayOf, bool, shape, string } = PropTypes;


export default {
  isNavigating: bool.isRequired,
  route: shape({
    name: string.isRequired,
    path: string.isRequired,
    params: shape({}).isRequired,
    query: shape({}).isRequired,
  }).isRequired,
  routes: arrayOf(shape({})).isRequired,
};
