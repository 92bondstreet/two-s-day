const twosday = require('./index');
const MENTORS = require('./people.json');

const MENTOREE = {'name': 'Beckett', 'email': 'awesome@mentoree.com'};
const events = twosday(MENTOREE, MENTORS);

console.log(JSON.stringify(events, null, 2));
