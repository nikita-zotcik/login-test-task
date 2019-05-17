import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'


// import userInfo from './pages/loginPage/reducer';

const reducers = {
  // userInfo
  form: formReducer
};


export const reducer = combineReducers(reducers);
