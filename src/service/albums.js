import axios from 'axios';

export default class AlbumsService {

  static getAlbums = async () => {
    try {
      const response = await axios.get('https://api.spotify.com/v1/artists/2sFXe6NbmT3k7Qy4N8fE7f/albums', {
        headers: {
          'Authorization': 'Bearer BQBpNJrBXzlGCVROLZ1_UmWywgclqbUDVr6bk2EYI95T0ECoxzKooOfuGZWgClQ60_SIrQn4eU7MOEN_kTU'
        }
      });
      console.log(response.data);
      return response.data.items;
    } catch (error) {
      console.log('getAlbums -> ', error);
    }
  }

  static findAlbum = async(id) => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/albums/${id}`, {
        headers: {
          'Authorization': 'Bearer BQBpNJrBXzlGCVROLZ1_UmWywgclqbUDVr6bk2EYI95T0ECoxzKooOfuGZWgClQ60_SIrQn4eU7MOEN_kTU'
        }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log('findAlbum -> ', error);
    }
  }
}