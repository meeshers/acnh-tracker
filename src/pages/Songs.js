import React, { Component } from 'react';
import axios from 'axios';
import '../sass/Songs.scss';

const endPoint = `https://acnhapi.com/v1a/songs`;

class Songs extends Component {
  state = {
    songs: [],
  }

  getSongs() {
    axios.get(endPoint)
      .then((res) => {
        this.setState({
          songs: res.data,
        })
      });
  }

  componentDidMount() {
    this.getSongs();
  }

  render() {
    const allSongs = this.state.songs;

    const displaySongs = allSongs.map((song) => {
      return (
        <div key={song.id} className='song'>
          <img src={song.image_uri}/>
          <p>{song.name['name-USen']}</p>
        </div>
      )
    })

    return (
      <div className='title'>
        <h2>Songs List</h2>
        <div className='song-list'>
          {displaySongs}
        </div>
      </div>
    )
  }
}

export default Songs;