import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { toolbar } from '../../util/quil_toolbar';

var icons = ReactQuill.Quill.import('ui/icons');
icons['bold'] = '<i class="fa fa-bold" aria-hidden="true"></i>';
icons['italic'] = '<i class="fa fa-italic" aria-hidden="true"></i>';
icons['underline'] = '<i class="fa fa-underline" aria-hidden="true"></i>';
icons['link'] = '<i class="fa fa-link" aria-hidden="true"></i>';
icons['image'] = '<i class="fa fa-image" aria-hidden="true"></i>';


class AnswerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.answer;
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.answer.user_id !== nextProps.answer.user_id) {
      return true;
    }
    return false;
  }
  
  updateBody(value) {
    this.setState({body: value});
  }

  handleClick(e) {
    e.preventDefault();
    this.props.clearErrors();
    const answer = {
      user_id: this.props.answer.user_id,
      question_id: this.props.answer.question_id,
      body: this.state.body,
    }
    // this.setState({body: ""});
    // this.props.action(answer);
    this.props.action(answer).then(
      () => this.setState({body: ''})
    );
    debugger
  }

  render() {
    let prompt = '';
    if (this.props.answer.user_id === null) {
      prompt = (
        <div className='warning'>Please sign in to post an answer</div>
      )
    } else if (this.props.errors.length > 0) {
      prompt = (
        <div className='warning'>{this.props.errors[0]}</div>
      )
    }
    return (
      <div>
        {prompt}
        <form className='question-form'>
          <label className='answer-form-label'>Your Answer</label>
          <ReactQuill 
            className='textarea'
            value={this.state.body}
            onChange={this.updateBody.bind(this)}
            modules={AnswerForm.modules}
            formats={AnswerForm.formats}
            theme={'snow'}
            />
          <div>
            <button id='cool-button'
            onClick={this.handleClick.bind(this)}>{this.props.formType}</button>
          </div>
        </form>
      </div>
    );
  }
}

AnswerForm.modules = toolbar;

AnswerForm.customModules = {
  toolbar: {
    container: '#toolbar'
  }
}

AnswerForm.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline',
  'list', 'bullet', 'indent',
  'link','image','align','color', 'code-block'
]

export default withRouter(AnswerForm);
