const BASE_URL = "https://jsonplaceholder.typicode.com/comments/";
const axios = require("axios");

class Comments {
  async getCommentById(id) {
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

  async getAllComments() {
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

  //http://jsonplaceholder.typicode.com/comments?postId=1
  async getAllCommentsByPostId(id) {
    const res = await axios
      .get(`${BASE_URL}?postId=${id}`)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.error(error);
      });

    return res;
  }
}

module.exports = new Comments();
