const { compose } = require('react-app-rewired');
const rewireSass = require('react-app-rewire-scss');
const rewireSvgReactLoader = require('react-app-rewire-svg-react-loader');

module.exports = compose(
  rewireSass,
  rewireSvgReactLoader
);
