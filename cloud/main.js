
// This cloud code is designed to gather BlogPost objects.
// Each one corresponds to a particular Parse blog post.
// The format is:
// url:         the url of the blog post. Should be a unique identifier
// title:       the title of the blog post
// author:      who wrote the blog post. string
// publishedAt: a timestamp for when it was published
// upvotes:     the number of upvotes on Hacker News

// This uses the HN API to gather some data.
Parse.Cloud.define("scrapeHackerNews", function(request, response) {
  console.log("scrapeHackerNews called")
});

// This grabs some info from the Parse blog.
Parse.Cloud.define("scrapeParseBlog", function(request, response) {
  var url = "http://feeds.feedburner.com/ParseBlog?format=xml"
  console.log("scrapeParseBlog called")
});
