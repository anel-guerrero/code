import React from 'react';
import {QuestionItem} from './question_item'

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.receiveAllQuestions();
    this.props.receiveAllUsers();
  }

  render() {
    if (!((Object.values(this.props.users)).length > 0 && this.props.questions.length > 0)) {
      return <div></div>;
    }
  
    const questions = this.props.questions.map( (question, idx) => {
      return (
        <QuestionItem question={question} users={this.props.users} key={idx}/>
      );
    });

    let count = this.props.questions.length;
    let numberOfQuestions;
    if (count.toString()[count.toString().length - 1] == 1) {
      numberOfQuestions = `${count} question`;
    } else {
      numberOfQuestions = `${count} questions`;
    }
    
    return(
      <section className='container'>
        <div className='questions-index-header'>
          <h1>All Questions</h1>
          <button id='cool-button'>Ask Question</button>
        </div>
        <nav className='questions-nav'>
          {numberOfQuestions}
        </nav>
        <section className='questions'>
          {questions}
        </section>
      </section>
    );
  }
}

export default QuestionIndex;