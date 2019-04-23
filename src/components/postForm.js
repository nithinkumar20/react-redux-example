import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { newPost }  from '../Actions/postAction';
import PropTypes from 'prop-types';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''

        }

        this.chnageHnadle = this.chnageHnadle.bind(this)
        this.onSubmitChange = this.onSubmitChange.bind(this)
      }

      chnageHnadle = (e) => {
          this.setState({[e.target.name]: e.target.value})
      }

      onSubmitChange = (e) => {
          e.preventDefault();
          let post = {
              title: this.state.title,
              body: this.state.body
          }
          // action here
          this.props.newPost(post);
      }
  render() {
    return (
      <div>
          <h3>Add New Post</h3>
          <form onSubmit = {this.onSubmitChange}>
          <label>Title</label><br/>
          <input type='text' name='title' value={this.state.title} onChange={this.chnageHnadle}/><br/>
          <label>Description</label><br/>
          <input type='text' name='body' value={this.state.body} onChange={this.chnageHnadle}/><br/>
          <button type='submit'>Submit</button>
          </form>
      </div>
    );
  }
}

PostForm.propTypes = {
    newPost: PropTypes.func.isRequired  
}



export default connect(null, { newPost })(PostForm);