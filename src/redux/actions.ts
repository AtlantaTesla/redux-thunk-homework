import axios from 'axios';

// FILTER
// ======
export const CHANGE_COUNTRY = 'CHANGE_COUNTRY';
export const changeCountry = (value: string) => {
    return {
        type: CHANGE_COUNTRY,
        payload: value,
    };
};

// LIST
// ====
export const LOADING_LIST = 'LOADING_LIST';
export const SET_LIST = 'SET_LIST';
export const SET_NEW_LIST = 'SET_NEW_LIST';

export const startLoading = () => {
    return {
        type: LOADING_LIST,
    };
};

const setList = (data: any[], nextPageToken: string) => {
    return {
        type: SET_LIST,
        data,
        nextPageToken,
    };
};

const setNewList = (data: any[], nextPageToken: string) => {
    return {
        type: SET_NEW_LIST,
        data,
        nextPageToken,
    };
};

const API_KEY = 'AIzaSyAHAYPpRAZ3UCZrE9AAr99LVWUUsGUGmX4';

const API_URL = 'https://www.googleapis.com/youtube/v3/videos';

export const uploadList = (regionCode: string) => (dispatch: any) => {
    dispatch(startLoading());
    axios
        .get(API_URL, {
            params: {
                regionCode,
                part: 'snippet',
                maxResults: 9,
                chart: 'mostPopular',
                key: API_KEY,
            },
        })
        .then(({ data }: any) => {
            dispatch(setNewList(data.items, data.nextPageToken));
        })
        .catch(() => {});
};

export const uploadMore = (regionCode: string, nextPageToken: string) => (
    dispatch: any
) => {
    dispatch(startLoading());
    axios
        .get(API_URL, {
            params: {
                regionCode,
                part: 'snippet',
                maxResults: 9,
                chart: 'mostPopular',
                key: API_KEY,
                pageToken: nextPageToken,
            },
        })
        .then(({ data }: any) => {
            dispatch(setList(data.items, data.nextPageToken));
        })
        .catch(() => {});
};
// показать ошибку
// ещё одно состояние
// нужно ли хранить ошибку в состоянии, можно и локально
// ?????7
