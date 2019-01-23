import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <main>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Fresno App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to={`/albums/`}>Albums</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/playlists/`}>Playlist</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        {this.props.children}
      </div>
      </main>
    );
  }
}

export default App;
