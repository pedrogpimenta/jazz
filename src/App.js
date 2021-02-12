import React from 'react'
import ReactPlayer from 'react-player'
import ControlsMusic from './ControlsMusic'
import './App.css'

import { MUSIC } from './CONSTANTS'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentMusic: {
        __html: 'Nothing playing yet',
      },
      playing: false,
      volume: 0,
    }
  }

  handlePlaypause = () => {
    this.setState({
      playing: !this.state.playing,
    })
  }

  loadMusic = (music) => {
    console.log(music.src)
    this.setState({
      currentMusic: music,
      playing: true,
    })
  }

  handleVolumeChange = (volume) => {
    this.setState({
      volume: volume,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="music-list">
          {MUSIC.map((music, i) => (
            <div
              key={`${music.name}-${i}`}
              className="music-list__item"
              onClick={() => this.loadMusic(music)}
            >
              <div className="music-list__image">
                <img src={music.img} alt={music.name} />
                <div className="music-list__image-bg" style={{backgroundImage: `url(${music.img})`}}>
                </div>
              </div>
              <div className="music-list__name" dangerouslySetInnerHTML={music}>
              </div>
            </div>
          ))}
        </div>
        <div
          className="controls"
        >
          {/* {typeof this.state.currentMusic.src !== 'undefined' && */}
            <ControlsMusic
              currentMusic={this.state.currentMusic}
              playing={this.state.playing}
              volume={this.state.volume}
              handlePlaypause={this.handlePlaypause}
              handleVolumeChange={this.handleVolumeChange}
            />
          {/* } */}
          {/* <div className="controls__ui">
            <div className="controls__menu">
              M
            </div>
            <div className="controls__search">
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
