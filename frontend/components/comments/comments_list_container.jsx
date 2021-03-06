import React from 'react';
import { connect } from 'react-redux';
import CommentsList from './comments_list';

const msp = (state, ownProps) => {
  let post_comments = [];
  let commentsIds = [];
  const comments = state.entities.comments;

  
  if (ownProps.post.title) {
    commentsIds = state.entities.questions[ownProps.id].commentsIds;
  } else {
    commentsIds = state.entities.answers[ownProps.id].commentsIds;
  }

  for (let key in comments) {
    if (commentsIds.includes(parseInt(key))) {
      post_comments.push(comments[key]);
    }
  };

  let date = Date.parse(ownProps.post.created_at);
  let date_function = new Date(date);
  let timestamp = date_function.toLocaleString();
  return {
    
    comments: post_comments,
    users: state.entities.users,
    timestamp: timestamp,
  }
}

const mdp = (dispatch) => {
  return {

  }
}

export default connect(msp, mdp)(CommentsList);

