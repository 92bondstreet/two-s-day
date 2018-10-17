const sessions = require('./sessions');
const {log} = require('gcal');
const MENTOREE = require('./mentoree.json');
const MENTORS = require('./people.json');
const twosday = require('./index');

const WEEK = 43;

const events = sessions(MENTOREE, MENTORS, WEEK);

console.log(JSON.stringify(events, null, 2));

async function bulk () {
  const results = await twosday(MENTOREE, MENTORS, WEEK);

  log.results(results);
}

bulk();
