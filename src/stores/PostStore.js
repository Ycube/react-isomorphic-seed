var alt = require('../alt');
var PostActions = require('../actions/PostActions');

class PostStore{
    constructor(){
        var self = this;
        this.bindListeners({
            updateCurrentPost: PostActions.UPDATE_CURRENT_POST,
            updatePosts:  PostActions.UPDATE_POSTS
        });
        this.on('init', function(){
            self.posts = []; //holds an array of posts to display on the home page
            self.currentPost = null; //holds a single post instance
        });
    }

    updateCurrentPost(post){
        this.currentPost = post;
    }

    updatePosts(posts){
        this.posts = posts;
    }

}

module.exports = alt.createStore(PostStore, 'PostStore');