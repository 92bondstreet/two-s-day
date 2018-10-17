const {api} = require('gcal');
const sessions = require('./sessions');

/**
 * Add pair programming event to Google Calendar
 * @param  {Object} mentoree
 * @param  {Array} pairs
 * @return {Array}
 */
module.exports = async (mentoree, pairs) => {
  const events = sessions(mentoree, pairs);

  return await api.bulk(events);
};
