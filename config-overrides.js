const { compose } = require('react-app-rewired');
const rewireSass = require('react-app-rewire-scss');

module.exports = compose(
  rewireSass
);
