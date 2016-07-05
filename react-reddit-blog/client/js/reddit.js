var data = {
    "id": 1,
    "title": "Evonove website",
    "date": "2016-07-04T13:05:45.143860Z",
    "url": "https://evonove.it/",
    "image": "http://lorempixel.com/image_output/animals-q-c-640-480-6.jpg",
    "upvotes": 10,
    "downvotes": 0,
    "nsfw": true
}

var RedditApp = React.createClass({
   render: function() {
       return (
           <div className = "reddit-app">
               <PostList />
               <PostForm />
           </div>
       );
   }
});

var PostList = React.createClass({
   render: function() {
       return (
           <div className = "post-list">
               <SinglePost />
           </div>
       )
   }
});

var SinglePost = React.createClass({
    render: function() {
        return (
            <div className = "single-post">
                <VoteBox initialUpvotes={this.props.post.upvotes} initialDownvotes={this.props.post.downvotes} />
                <ArticleBox image={this.props.post.image} title={this.props.post.title} nsfw={this.props.post.nsfw} url={this.props.post.url} />
            </div>
        )
    }
});

var VoteBox = React.createClass({
    // Setting the initial state of component to 0 (no vote)
    getInitialState: function() {
      return {vote: 0};
    },

    // Upvote state is set to 1
    handleUpvote: function() {
        if (this.state.vote === 0) {
            this.setState({vote: 1});
        } else if (this.state.vote === 1) {
            this.setState({vote: 0});
        } else if (this.state.vote === -1) {
            this.setState({vote: 1});
        }
    },

    // Downvote state is set to -1
    handleDownvote: function() {
        if (this.state.vote === 0) {
            this.setState({vote: -1});
        } else if (this.state.vote === -1) {
            this.setState({vote: 0});
        } else if (this.state.vote === 1) {
            this.setState({vote: -1});
        }
    },

   render: function() {
       var score = this.props.initialUpvotes - this.props.initialDownvotes;
       // React calculates every time the score based on state:
       // if state goes from 0 to 1 (or -1), React calculates score + 1 (or -1), that is this.props.initialUpvotes - this.props.initialDownvotes + 1 (or -1);
       // if state goes from 1 (or -1) to 0, React calculates score + 0.
       score += this.state.vote;

       return (
           <div className = "vote-container">
               <span onClick={this.handleUpvote}>Up</span>
               <span>{score}</span>
               <span onClick={this.handleDownvote}>Down</span>
           </div>
       )
   }
});

var ArticleBox = React.createClass({
   render: function() {
       var nsfw = null;
       if(this.props.nsfw) {
           nsfw = <span className = "nsfw">NSFW</span>;
       }

       return (
           <div className = "article-box">
               <img src={this.props.image} />
               <h2>{this.props.title}</h2>
               {nsfw}
               <a className = "article-link" href={this.props.url}>{this.props.url}</a>
               <time datetime="2016-07-04T13:05:45.143860Z">10 hours ago</time>
           </div>
       )
   }
});

var PostForm = React.createClass({
   render: function() {
       return (
           <form className = "post-form">
               <input
                   type="text"
                   placeholder="Insert title" />
               <input
                   type="date" />
           </form>
       )
   }
});

ReactDOM.render(
    <SinglePost post={data}/>,
    document.getElementById('content')
);
