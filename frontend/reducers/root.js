import { combineReducers } from 'redux';

import ErrorsReducer from './auth_errors';
import SessionReducer from './session';
import VideosReducer from "./videos";
import CommentsReducer from './comments'
import LikesReducer from './likes'
import SearchReducer from './searches'

const RootReducer = combineReducers({
    errors: ErrorsReducer,
    session: SessionReducer,
    videos: VideosReducer,
    comments: CommentsReducer,
    likes: LikesReducer,
    searched: SearchReducer,
})

export default RootReducer;

// entities
// ui
// session  
// errors 