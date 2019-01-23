import AlbumsService from '../../service/albums';
import * as types from './actionTypes';

export const getAlbums = () => {
  return async (dispatch) => {
    try {
      const albums = await AlbumsService.getAlbums();
      dispatch({
        type: types.GET_ALBUMS,
        albums
      });
    } catch (error) {
      console.log(error);
      throw new Error('getAlbums action -> ', error);
    }
  }
}

export const findAlbum = (id) => {
  return async (dispatch) => {
    try {
      const album = await AlbumsService.findAlbum(id);
      dispatch({
        type: types.FIND_ALBUM,
        album
      });
    } catch (error) {
      console.log(error);
      throw new Error('findAlbum action -> ', error);
    }
  }
}