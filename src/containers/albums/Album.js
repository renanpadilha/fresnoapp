import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AlbumActions from '../../store/albums/actions'
import ColorThief from 'color-thief';
import foto from './fresno.jpg'

class Album extends Component {

  componentWillMount() {
    this.props.findAlbum(this.props.match.params.id);
  }

  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center">
          {this.props.album.name}
        </h1>
        <img id="theimage" src={this.props.album.images[0].url} />
        <ul className="list-group">
          {
            this.props.album.tracks.items.map(track => 
              <li className="list-group-item" key={track.id}>
                {track.name} - <small>{track.artists.length > 1 ? track.artists.map(artist => artist.name).join(', ') : track.artists[0].name}</small>
                <span className="float-right">
                  <audio controls>
                    <source src={track.preview_url} type="audio/mp3"/>
                  </audio>
                </span>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  album: state.albums.album || {}
});

const mapDispatchToProps = dispatch => bindActionCreators(AlbumActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Album)