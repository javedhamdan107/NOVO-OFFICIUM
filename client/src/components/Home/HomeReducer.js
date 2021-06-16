import {FETCH_ALL_SEEKERS} from '../../constants/actionTypes';

export default (users = [], action) => {
    switch(action.type) {
    case FETCH_ALL_SEEKERS:
        return action.payload;
    default:
        return users;
    }
};
