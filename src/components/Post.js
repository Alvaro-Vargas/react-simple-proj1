import React from 'react';

import './Post.css'

import Comment from './Comment';

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      newCommentText: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      comments: [
        ...this.state.comments,
        { text: this.state.newCommentText }
      ],
      newCommentText: '',
    });

  }

  handleTextChange(e){
    this.setState({ newCommentText: e.target.value })
  }

  render(){
    return(
    <>
      <h2> {this.props.title } </h2> 
      <p>{this.props.text}</p>
      <form onSubmit={this.handleSubmit}>
        <h4>Comment Section</h4>
        {this.state.comments.map((comment, index) => {
          return <Comment key={index} text={comment.text} />
        })}
        <input
          type="text"
          value={this.state.newCommentText}
          onChange={this.handleTextChange}
        />

        <button type="submit">Make Comment</button>
      </form>
      
    </>
    );
  }
}