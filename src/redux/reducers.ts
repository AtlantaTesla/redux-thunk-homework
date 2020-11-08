import { combineReducers } from 'redux';
import {
    CHANGE_COUNTRY,
    LOADING_LIST,
    SET_LIST,
    SET_NEW_LIST,
} from './actions';

interface IAction {
    type: string;
    payload?: any;
}

// FILTER
// ======
const initialFilterState = {
    country: 'RU5',
};

const filterReducer = (state = initialFilterState, action: IAction) => {
    switch (action.type) {
        case CHANGE_COUNTRY: {
            return {
                ...state,
                country: action.payload,
            };
        }
    }

    return state;
};

// LIST
// ====

interface IListAction extends IAction {
    type: typeof SET_LIST | typeof SET_NEW_LIST;
    data: any[];
    nextPageToken: string;
}

interface ILoadingListAction extends IAction {
    type: typeof LOADING_LIST;
}

const initialListState = {
    data: [],
    loading: false,
    nextPageToken: '',
};

const listReducer = (
    state = initialListState,
    action: IListAction | ILoadingListAction
) => {
    switch (action.type) {
        case LOADING_LIST: {
            return {
                ...state,
                loading: true,
            };
        }
        case SET_LIST: {
            return {
                ...state,
                loading: false,
                nextPageToken: action.nextPageToken ? action.nextPageToken : '',
                data: [...state.data, ...action.data],
            };
        }
        case SET_NEW_LIST: {
            return {
                ...state,
                loading: false,
                nextPageToken: action.nextPageToken ? action.nextPageToken : '',
                data: [...action.data],
            };
        }
    }

    return state;
};

// ROOT
// ====
export const rootReducer = combineReducers({
    filter: filterReducer,
    list: listReducer,
});

export default rootReducer;
