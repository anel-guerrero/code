import {RECEIVE_ALL_QUESTIONS, RECEIVE_QUESTION, DELETE_QUESTION, RECEIVE_SEARCH_REQUEST} from '../actions/questions_actions';
import merge from 'lodash/merge';

export const questionsReducer = (state = {}, action) => {
  debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return action.questions;
    case RECEIVE_QUESTION: 
      return merge({}, state, { [action.question.id]: action.question, tags: action.tags });
    case DELETE_QUESTION:
      const newState = merge({}, state);
      delete newState[action.questionID];
      return newState;
    case RECEIVE_SEARCH_REQUEST:
      return action.query;
    default:
      return state;
  }
};