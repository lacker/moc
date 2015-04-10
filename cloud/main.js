
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
  var url = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&q=http://feeds.feedburner.com/ParseBlog"

  Parse.Cloud.httpRequest({url: url}).then(function(httpResponse) {

    console.log("sPG: response has " + httpResponse.text.length + " length")

    // Just pass the json to the client for now
    response.success(httpResponse.text)
  })
});
