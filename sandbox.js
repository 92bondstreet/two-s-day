const sessions = require('./sessions');
const MENTOREE = require('./mentoree.json');
const MENTORS = require('./people.json');
const twosday = require('./index');

const events = sessions(MENTOREE, MENTORS);

console.log(JSON.stringify(events, null, 2));

async function bulk () {
  const result = await twosday(MENTOREE, MENTORS);

  console.log(result);
}

bulk();
