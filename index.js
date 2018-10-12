const moment = require('moment');
const calendar = require('./calendar.js');

// generate a round robin algorithm for people
// fully random by @BetonMAN
// https://gist.github.com/guilhermepontes/17ae0cc71fa2b13ea8c20c94c5c35dc4
const shuffleArray = arr => arr
  .map(a => [Math.random(), a])
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1]);

/**
 * Generate Events for google calendar
 * @param  {Object} mentoree
 * @param  {Array} pairs
 * @return {Array}
 */
module.exports = (mentoree, pairs) => {
  const shuffle = shuffleArray(pairs);
  const {name, email} = mentoree;

  return shuffle.filter(pair => pair.name !== name).map((pair, index) => {
    const tuesday = moment().startOf('isoWeek').add(index + 1, 'week').day(2);
    const date = {
      'date': tuesday.format('YYYY-MM-DD')
    };

    const summary = `Two(s)day, Remote Pair Programming - ${name} x ${pair.name}`;
    const attendees = [{
      email
    }, {'email': pair.email}];

    const event = JSON.parse(JSON.stringify(calendar));

    event.resource.attendees = attendees;
    event.resource.summary = summary;
    event.resource.start = date;
    event.resource.end = date;

    return event;
  });
};
