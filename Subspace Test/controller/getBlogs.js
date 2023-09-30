import _ from "lodash";

export const getBlogs = async (req, res) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "x-hasura-admin-secret":
          "32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6",
      },
    };

    const response = await fetch(
      "https://intent-kit-16.hasura.app/api/rest/blogs",
      options
    );
    const { blogs } = await response.json();

    const numberOfBlogs = _.size(blogs);
    const blogWithLongestTitle = _.maxBy(blogs, (item) => item.title.length);
    const blogsWithPrivacyTitle = _.filter(blogs, (item) =>
      item.title.toLowerCase().includes("privacy")
    );
    const numberOfBlogsWithPrivacyTitle = _.size(blogsWithPrivacyTitle);
    const uniqueTitles = _.uniqBy(blogs, "title").map((item) => item.title);

    res
      .status(200)
      .json({
        numberOfBlogs: numberOfBlogs,
        blogWithLongestTitle: blogWithLongestTitle,
        numberOfBlogsWithPrivacyTitle: numberOfBlogsWithPrivacyTitle,
        uniqueTitles: uniqueTitles,
      });
  } catch (error) {
    res.status(503).json({ message: "Error 503 Service Unavailable" });
  }
};

export const getSearchBlog = async (req, res) => {
  try {
    const { query } = req.query;

    const options = {
      method: "GET",
      headers: {
        "x-hasura-admin-secret":
          "32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6",
      },
    };

    const response = await fetch(
      "https://intent-kit-16.hasura.app/api/rest/blogs",
      options
    );
    const { blogs } = await response.json();

    const blogsWithSearch = _.filter(blogs, (item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    res.status(200).json(blogsWithSearch);
  } catch (error) {
    res.status(503).send("Error 503 Service Unavailable");
  }
};
