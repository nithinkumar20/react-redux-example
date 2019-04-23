import React, { Component } from 'react';
import './App.css';
import Posts from './components/posts';
import PostForm from './components/postForm';
import { Provider } from 'react-redux';
import store from './components/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <div className="App">
        <PostForm />
        <Posts />
      </div>
      </Provider>
     
    );
  }
}

export default App;
