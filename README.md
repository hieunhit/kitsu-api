# Kitsu API

A NodeJS wrapper for the Kitsu.

## Usage

#### Setup
```
npm install --save kitsu-api
```

#### Initialize
```js
const KitsuAPI = require("kitsu-api");

// Depending on the version an api_key is needed.
// The default version is version 1.
let kitsuAPI = new KitsuAPI({[api_key, version, debug]});
```

#### Anime
```js
// Get an anime by slug (can also be the id Hummingbird uses).
Anime.getAnime("log-horizon")
  .then(res => console.log(res))
  .catch(err => console.error(err));

/* Search is not supported in V2 (yet) */
// Anime.search("log-horizon")
//   .then(value => console.log(value))
//   .catch(err => console.error(err));
```

# License

MIT License

Copyright (c) 2016 - kitsu-api - Released under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
