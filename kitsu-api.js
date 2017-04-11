const Anime = require('./lib/anime');
const Helper = require('./lib/helper');

module.exports = class KitsuAPI {
  constructor({ api_key, version = 1, debug = false } = {}) {
    if (!api_key && api_key === 2) throw new Error('No API key given!');

    const helper = new Helper(api_key, version, debug);

    KitsuAPI.Anime = new Anime(helper);

    return KitsuAPI;
  }
};
