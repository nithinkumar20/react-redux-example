import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../Actions/postAction';

class Posts extends Component {

    componentWillMount() {
        console.log('component')
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps) 
        if(nextProps.newPost) {
            console.log('its new') 
                       this.props.posts.unshift(nextProps.newPost)
        }
    }
  render() {
    let postDetails = this.props.posts.map(post => (
        <div key={post.title}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
        </div>))
    return (
      <div>
          <h3>Posts</h3>
          {postDetails}
      </div>
    );
  }
}

Posts.propTypes = {
    fetchPosts: propTypes.func.isRequired,
    posts: propTypes.array.isRequired ,
    newPost: propTypes.object
}

const stateToProps =  state => ({
    posts: state.posts.items,
    newPost: state.posts.newPost
});

export default connect(stateToProps, { fetchPosts })(Posts);