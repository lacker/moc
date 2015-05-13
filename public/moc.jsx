// keys for moc.parseapp.com
Parse.initialize(
  "vaCDeEWI1qtZ0m95JFZttf3U7b4kLEQQWSAjWtV3",
  "oLC9CG6BUtUwJGXiynv1M8ToKUpNmSMcB52GZwUS")

$(document).ready(function() {


  Parse.Cloud.run("scrapeParseBlog").then(function(response) {
    console.log("scraped the parse blog")
    return Parse.Cloud.run("scrapeHackerNews")
  }).then(function() {
    console.log("scraped Hacker News")
  })
})
