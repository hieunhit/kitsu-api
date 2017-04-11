module.exports = class Anime {
  constructor(helper) {
    this.helper = helper;
  };

  getAnime(id) {
    if (!isNaN(id)) {
      return this.helper.get(`anime/${id}`);
    } else {
      return this.helper.get(`anime`, { 'filter[slug]': id });
    }
  }

  search(query) {
    return this.helper.get("anime", { query });
  }

  getGenres(id) {
    return this.helper.get(`anime/${id}/genres`);
  }
};
