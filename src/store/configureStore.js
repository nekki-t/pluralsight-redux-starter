/**
 * Created by hideki on 2017/05/01.
 */
if(process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
