# Bogus Filter
> The node agent that allows you to start filtering out bogus input data from your application.

## Installation

  `npm install bogusfilter`

## Usage
```
var bogusfilter = require('bogusfilter');

// Note: The filter with the content of someone@competitor.com
// is a global filter added by the Bogus Filter team.
var bogus = bogusfilter.check('email', 'someone@competitor.com', process.env.BOGUS_API_KEY, true);
```

Output will be:
```
{
  "success": true,
  "query": "someone@competitor.com",
  "bogus": true,
  "group": {
    "_id": "5aab3ea9b7450b00143b093f",
    "title": "Bogus Emails",
    "description": {
      "extended": "",
      "brief": ""
    },
    "images": [],
    "global": true
  },
  "category": {
    "_id": "5aab3ea9b7450b00143b0937",
    "title": "Email",
    "description": "Filtered email addresses.",
    "global": true
  },
  "match": {
    "_id": "5ac060ab6bd2e600149164f5",
    "title": "Landing Page Demo Email Filter",
    "content": "someone@competitor.com",
    "group": "5aab3ea9b7450b00143b093f",
    "category": "5aab3ea9b7450b00143b0937",
    "global": true
  },
  "matches": 8,
  "global": true,
  "timestamp": 1529849129832
}
```

Or...

```
// Note: nope.it is NOT a filter that has been set via the
// Bogus Filter dashboard at https://my.bogusfilter.com
var bogus = bogusfilter.check('nope.it');

{
    "success": true,
    "query": "nope.it",
    "bogus": false,
    "group": {
      "_id": "5aab3ea9b7450b00143b093f",
      "title": "Bogus Emails",
      "description": {
        "extended": "",
        "brief": ""
      },
      "images": [],
      "global": true
    },
    "category": {
        "_id": "5aab32edeec8f1287c56b11c",
        "description": "Filtered email addresses.",
        "title": "Email",
        "path": "email"
    },
    "match": null,
    "matches": 1,
    "global": true,
    "timestamp": 1521711746430
}
```


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
