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

var InfoBlock = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    // Subscribe to all BlogPost objects, ordered by creation date
    // The results will be available at this.data.comments
    return {
      comments: (new Parse.Query("Comment")).descending("points")
    };
  },

  render: function() {
    // Render info for each blog post
    return (
      <ul>
        {this.data.posts.map(function(post) {
          return <li>{post.points} points: {post.title}</li>;
        })}
      </ul>
    );
  }
});
