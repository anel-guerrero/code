import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    let count = this.props.questions.length;
    let numberOfQuestions;
    if (count === 1) {
      numberOfQuestions = `${count} result`;
    } else {
      numberOfQuestions = `${count} results`;
    }

    let list = null;
    if (this.props.questions.length > 0) {
      list = this.props.questions.map((question, idx) => {
    
        return (      
          <li key={idx}>
            <div className='answer-show-container'>
            
              <div className='answer-layout-left'>                
                  <div className='stats'>
                    <div className='stats-number'>0</div>
                    <div>votes</div>
                  </div>
                  <div className='stats'>
                    <div className='stats-number'>0</div>
                    <div>answers</div>
                  </div>          
              </div> 

              <div className='answer-layout'>
                <div className='post-layout-main'>
                  <div className='search-question-title'><Link to={`/questions/${question.id}`} className='question-hyperlink'>{question.title}</Link></div>
                  <article className='question-body'>
                    {question.body}
                  </article>
                  <div className='question-details'>     
                  </div>
                </div>  
              </div>

            </div>
          </li>
        );
      });
    }

    return (
      <section className='container'>
        <div className='questions-index-header'>
          <h1>Search Results</h1>
          <Link to={`/questions/ask`} id='cool-button'>Ask Question</Link>
        </div>
        <nav className='answers-nav'>
          {numberOfQuestions}
        </nav>
        <ul className='answers-list'>{list}</ul>
      </section>
    );
  }
}

export default Search;