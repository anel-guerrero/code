import React from 'react';
import { Link } from 'react-router-dom';
import AnswerItemContainer from './answer_item_container';

class ListOfAnswers extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      allAnswers: this.props.allAnswers,
      question: this.props.question,
    }   
  }

  componentDidUpdate(prevProps) { 
    if ((Object.keys(prevProps.allAnswers).length !== Object.keys(this.props.allAnswers).length)) {
      this.setState({allAnswers: this.props.allAnswers});
    }
  }

  componentWillReceiveProps(newProps) { 
    this.setState({allAnswers: newProps.allAnswers});
  }

  render() {
    let answers = [];
      if (Object.values(this.state.allAnswers).length > 0) {    
        answers = Object.values(this.state.allAnswers);    
      }
    let count = answers.length;
    let numberOfAnswers;
    if (count === 1) {
      numberOfAnswers = `${count} answer`;
    } else {
      numberOfAnswers = `${count} answers`;
    }
    
    let list = null;
    if (answers.length > 0) {
      list = answers.map((answer, idx) => {    
        return (      
          <li key={idx}>
            <AnswerItemContainer 
            answer={answer}
            />
          </li>
        );
      });
    }
        
    return (
      <div>
        <div className='answers-nav'>{numberOfAnswers}</div>
        <ul className='answers-list'>{list}</ul>
      </div>
    );
  }
}

export default ListOfAnswers;