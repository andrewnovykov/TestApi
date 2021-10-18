const { expect } = require("chai");
const fake = require("faker");

const Posts = require("../../../api-helpers/resourses/posts/post-api-helpers");

describe("Posts", async () => {
  const POST_ID = fake.datatype.number(99) + 1;

  const USER_ID = fake.datatype.number(5) + 1;
  const POST_TITLE = fake.lorem.words();
  const POST_BODY = fake.lorem.text();

  const POST = {
    title: POST_TITLE,
    body: POST_BODY,
    userId: USER_ID,
  };

  it(`Should return post with id ${POST_ID}`, async () => {
    const res = await Posts.getPostById(POST_ID);
    return expect(res.data.id).to.equal(POST_ID);
  });

  it("Should get 200 status code", async () => {
    const res = await Posts.getPostById(POST_ID);
    return expect(res.status).to.equal(200);
  });

  it("Post title and post body should be more then 3 sympols", async () => {
    const res = await Posts.getAllPosts();
    res.data.forEach((element) => {
      expect(element.title).to.have.lengthOf.above(3);
      expect(element.body).to.have.lengthOf.above(3);
    });
  });

  it("User shoud be able to create post", async () => {
    const res = await Posts.createPost(POST);
    return expect(res.data.userId).to.equal(POST.userId);
    return expect(res.data.title).to.equal(POST.title);
    return expect(res.data.body).to.equal(POST.body);
  });
});
