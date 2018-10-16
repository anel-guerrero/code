import React from 'react';
import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: this.props.answer.votes,
    }
  }

  handleDelete(id) {
    return () => {
      this.props.deleteAnswer(id);
    }
  }

  createVote(idx, vote_type) {
    const vote = {
      post_id: idx,
      user_id: this.props.user_id,
      vote_type: vote_type,
      post_type: 'Answer'
    }
  
    this.props.createVote(vote);
  }

  render() {
    let deleteA = null;
        if (this.props.user_id === this.props.answer.user_id) {
          deleteA = (<span className='delete-link' onClick={this.handleDelete.call(this, this.props.answer.id)}>delete</span>);
        }

    let votes = 0 
    if (this.props.answer.votes.length > 0) {
      votes = this.props.answer.votes.reduce((acc, el) => acc + el);
    }
   
    
    return (
            <div className='answer-show-container'>
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
                  <div className='question-details'>
                    <Link to={`/answers/${this.props.answer.id}/edit`}>edit</Link>
                    {deleteA}
                  </div>
                </div> 

                <div className='post-layout-comment'>
                  add comment
                  
                </div> 
              </div>
            </div>
    );
  }
}


export default AnswerItem;
{/* <article className='question-body'>
  {this.props.answer.body}
</article> */}