const BASE_URL = "https://jsonplaceholder.typicode.com/posts/";
const axios = require("axios");

class Posts {
  async getPostById(id) {
    const res = await axios
      .get(`${BASE_URL}${id}`)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.error(error);
      });

    return res;
  }

  async getAllPosts() {
    const res = await axios
      .get(`${BASE_URL}`)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.error(error);
      });

    return res;
  }

  async createPost(post) {
    const res = await axios
      .post(`${BASE_URL}`, post)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.error(error);
      });

    return res;
  }
}

module.exports = new Posts();
