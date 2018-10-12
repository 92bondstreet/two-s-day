# TWO(S)DAY

> Generate pair-programming calendar events

![Photo by Tyler Nix](https://source.unsplash.com/7ukf-r-Oh-k/800x600)

## Installation

```
❯ yarn add git+ssh://git@github.com/92bondstreet/two-s-day.git
```

## Usage

```js
const MENTOREE = {'name': 'awesome', 'email': 'awesome@mentoree.com'};
const MENTORS = [{
  'name': 'awesome-a',
  'email': 'awesome-a@mentor.com'
}, {
  'name': 'awesome-b',
  'email': 'awesome-b@mentor.com'
}, {
  'name': 'awesome-c',
  'email': 'awesome-c@mentor.com'
}];

const events = twosday(MENTOREE, MENTORS);

console.log(JSON.stringify(events, null, 2));
```
