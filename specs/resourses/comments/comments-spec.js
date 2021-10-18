const { expect } = require("chai");
const fake = require("faker");

const Comments = require("../../../api-helpers/resourses/comments/comment-api-helpers");

describe("Comments", async () => {
  const COMMENT_ID = fake.datatype.number(99) + 1;
  const POST_ID = fake.datatype.number(99) + 1;

  it(`Should return comment with id ${COMMENT_ID}`, async () => {
    const res = await Comments.getCommentById(COMMENT_ID);
    return expect(res.data.id).to.equal(COMMENT_ID);
  });

  it("Should get 200 status code", async () => {
    const res = await Comments.getCommentById(COMMENT_ID);
    return expect(res.status).to.equal(200);
  });

  it("Comment body should be more then 3 sympols", async () => {
    const res = await Comments.getAllComments();
    res.data.forEach((element) => {
      expect(element.body).to.have.lengthOf.above(3);
    });
  });

  it(`All post comments shoud have post id ${POST_ID}`, async () => {
    const res = await Comments.getAllCommentsByPostId(POST_ID);
    res.data.forEach((element) => {
      return expect(element.postId).to.equal(POST_ID);
    });
  });
});
