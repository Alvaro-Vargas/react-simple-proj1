import React from 'react';

import './Comment.css'

export default class Comment extends React.Component {

  render() {
    return (
    <p>{ this.props.text }</p>
    );
  }
}  