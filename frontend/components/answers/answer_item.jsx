import React from 'react';
import ReactQuill from 'react-quill';
import CommentsContainer from '../comments/comments_container';
import PostLinks from '../functional_pieces/post_links';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: this.props.answer.votes,
    }
  }

  createVote(idx, vote_type) {
    const vote = {
      post_id: idx,
      user_id: this.props.user_id,
      vote_type: vote_type,
      post_type: 'Answer'
    }
    this.props.clearErrors();
    this.props.createVote(vote);
  }

  render() {
    let votes = 0 
    if (this.props.answer.votes.length > 0) {
      votes = this.props.answer.votes.reduce((acc, el) => acc + el);
    }
   
    let vote_error = ''
    if (this.props.errors.length > 0 && this.props.errors[2] === "Answer" && this.props.errors[1] == this.props.answer.id) {
      vote_error = this.props.errors[0]
    }
    return (

            <div className='answer-show-container'>
            <div className='error'>{vote_error}</div>
              <div className='answer-layout-left'>
                <i style={{lineHeight: '0.5'}}
                className="fas fa-caret-up fa-3x"
                onClick={() => this.createVote.call(this, this.props.answer.id, 1)}></i>
                <div className='stats-number'>{votes}</div>
                <i style={{lineHeight: '0.5'}}
                className="fas fa-caret-down fa-3x"
                onClick={() => this.createVote.call(this, this.props.answer.id, -1)}></i>
              </div> 

              <div className='answer-layout'>

                <div className='post-layout-main'>
                <ReactQuill 
                className='question-body'
                readOnly
                modules={{toolbar: null}}
                value={this.props.answer.body}
                />
                <PostLinks user_id={this.props.user_id}
                           author_id={this.props.answer.user_id} 
                           post_id={this.props.answer.id}
                           deletePost={this.props.deleteAnswer}
                           post='answer'
                           history={this.props.history}
                           />
                </div> 

                <CommentsContainer post={this.props.answer}/>
              </div>
            </div>
    );
  }
}


export default AnswerItem;
{/* <article className='question-body'>
{this.props.answer.body}
</article> */}
