Bogus Filter
============

The node agent that allows you to start filtering out bogus input data from your application.

## Installation

  `npm install bogusfilter`

## Usage
```
var bogusfilter = require('bogusfilter');

// Note: Prior to installation, a filter with the content of yep.it
// was added via the Bogus Filter dashboard at https://my.bogusfilter.com
var bogus = bogusfilter.check('yep.it');
```

Output will be:
```
{
    "success": true,
    "query": "yep.it",
    "bogus": true,
    "category": {
        "_id": "5aab32edeec8f1287c56b11c",
        "description": "Filtered email addresses.",
        "title": "Email",
        "path": "email"
    },
    "match": {
        "_id": "5aab32efeec8f1287c56b3a6",
        "content": "yep.it"
    },
    "timestamp": 1521711583118
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
    "category": {
        "_id": "5aab32edeec8f1287c56b11c",
        "description": "Filtered email addresses.",
        "title": "Email",
        "path": "email"
    },
    "match": null,
    "timestamp": 1521711746430
}
```


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
