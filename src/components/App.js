import React from 'react';

import './App.css'

import Post from './Post';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      newTitle: '',
      newText: '',
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(e) {
    switch (e.target.id) {
      case "title":
        this.setState({newTitle: e.target.value});
        break;
      case "text":
        this.setState({newText: e.target.value});
        break;
      default:
        break;
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({posts:[
        ...this.state.posts,
        {
          postTitle: this.state.newTitle,
          postText: this.state.newText,
        }
        ],
        newTitle: '',
        newText: '',
    });
  }
    
  

  // Method render is responsible to return the HTML content from this component.
  render() {
    return(
      <div>
        <h1>Feed Example</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h4>Create a Post</h4>
            <input 
              id="title"
              type="text" 
              value={this.state.newTitle}
              onChange={this.handleTextChange}
              placeholder="Post Title"
            />
          </div>
          <textarea 
            id="text"
            cols="30" 
            rows="10" 
            placeholder="Post Text"
            value={this.state.newText}
            onChange={this.handleTextChange}
          />
          <br/>
          <button type="submit">Create Post</button>
        </form>
        
        {this.state.posts.map((post, index) => {
          return <Post key={index} title={post.postTitle} text={post.postText} />
        })}
      </div>
    );
  }
}