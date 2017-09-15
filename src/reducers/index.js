import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import tracks from './tracks';
import filterTracks from './filterTracks';

export default combineReducers({
    tracks,
    filterTracks
});