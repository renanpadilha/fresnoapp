import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AlbumActions from '../../store/albums/actions'
import { NavLink } from 'react-router-dom';

class Albums extends Component {

  componentWillMount() {
    this.props.getAlbums();
  }

  render() {
    return (
      <div className="card-deck">
        {
          this.props.albums.map(album => 
            <div className="col-lg-3" key={album.id}>
              <div className="card mb-3">
                <img src={album.images[0].url} className="card-img-top" alt={album.name}/>
                <div className="card-body">
                  <h5 className="card-title">{album.name}</h5>
                  <p className="card-text">{album.id}</p>
                  <NavLink to={`/albums/${album.id}`}>Veja o Album</NavLink>
                  <p className="card-text"><small className="text-muted">{album.release_date}</small></p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }

}

const mapStateToProps = state => ({
  albums: state.albums.list || []
});

const mapDispatchToProps = dispatch => bindActionCreators(AlbumActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Albums)