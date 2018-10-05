import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr'
import loading from './loading';
import authMember from './authMember';

const rootReducer = combineReducers({
    loading,
    authMember,
    toastr: toastrReducer
});

export default rootReducer;