import * as types from './actionTypes';

const INITIAL_STATE = {
  list: [],
  album: {
    tracks: {
      items: []
    },
    images: [
      {
        url: ''
      }
    ]
  }
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_ALBUMS:
      return { ...state,
        list: action.albums
      };
    case types.FIND_ALBUM:
      return { ...state,
        album: action.album
      };
    default:
      return state;
  }
}

export default reducer;