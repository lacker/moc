var _ = require("underscore");

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

// This grabs ten posts from the Parse blog.
Parse.Cloud.define("scrapeParseBlog", function(request, response) {
  var url = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=http://feeds.feedburner.com/ParseBlog"

  Parse.Cloud.httpRequest({url: url}).then(function(httpResponse) {

    var resp = JSON.parse(httpResponse.text)
    var entries = resp.responseData.feed.entries

    var promises = []
    _.each(entries, function(entry) {
      console.log("pushing " + entry.title)
      promises.push(handleBlogPost(entry))
    });
    return Parse.Promise.when(promises)
  }).then(function() {
    response.success()
  });
});

// Handles a single blog post being scraped.
// Returns a promise for it being done.
// The post has fields:
// author: a string for the author
// link: a url to the article
// publishedDate: the date it was published in some weird format
// title: a title for the article
function handleBlogPost(post) {
  console.log("handling " + post.title)
  // TODO: create some objects
}
