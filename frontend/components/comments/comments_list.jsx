import React from 'react';

class CommentsList extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.post.commentsIds.length !== this.props.comments.length) {
      return true;
    }
    return false;
  }

  render() {
    if (this.props.comments.length === 0) {
      return <div></div>
    }
  
    const list = this.props.comments.map((post, idx) => {
      return (
        <li className='comment' key={idx}>{post.body} - <span className='username'>{this.props.users[post.user_id].username}</span></li>
      )
    })
  
    return(
      <ul className='comments-list'>
      {list}
      </ul>
    );
  }
}

export default CommentsList;