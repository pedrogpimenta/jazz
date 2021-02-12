import React from 'react'
import ReactPlayer from 'react-player'

import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import { CONTROLS_MUSIC_BGS } from './CONSTANTS'

class ControlsMusic extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      backgroundNumber: '',
      background: '',
    }
  }

  componentDidMount() {
    const backgroundNumber = Math.floor(Math.random() * CONTROLS_MUSIC_BGS.length)

    this.setState({
      backgroundNumber: backgroundNumber,
      background: CONTROLS_MUSIC_BGS[backgroundNumber],
    })
  }
  

  render() {
    return (
      <div
        className="controls__music"
      >
        {this.state.background}
        <div className="controls__name__wrapper">
          <div
            className='controls__name'
            dangerouslySetInnerHTML={this.props.currentMusic}
          >
          </div>
        </div>
        <div className="controls__buttons">
          <div className="controls__buttons__prev">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M44.463 43.5H6.39425L3.61377 5.5H43.5361L44.463 43.5Z" fill="white" stroke="black" stroke-width="3"/>
              <path d="M20.25 23.5L39 37.7894L38 12.2106L20.25 23.5Z" fill="black"/>
              <path d="M10.25 20.5L28 37.7894L31 10.2106L10.25 20.5Z" fill="black"/>
            </svg>
          </div>
          <div
            className="controls__buttons__playpause"
            onClick={() => this.props.handlePlaypause()}
          >
            {this.props.playing ?
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.4647 43.5344L4.53529 5.42859L43.5353 3.57145L44.4647 44.463L5.4647 43.5344Z" fill="white" stroke="black" stroke-width="3"/>
                <path d="M17 13L21.5 13.5L21 35.5L17.5 36L17 13Z" fill="black"/>
                <path d="M27 13L31.5 12.5L30 35.5L26.5 36L27 13Z" fill="black"/>
              </svg> : 
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.4647 43.5344L4.53529 5.42859L43.5353 3.57145L44.4647 44.463L5.4647 43.5344Z" fill="white" stroke="black" stroke-width="3"/>
                <path d="M36 20.5L18.25 37.7894L15.25 10.2106L36 20.5Z" fill="black"/>
              </svg>
              
            }
          </div>
          <div className="controls__buttons__next">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M44.4639 43.5361L5.46549 44.4647L4.53618 3.57485L43.5345 5.43191L44.4639 43.5361Z" fill="white" stroke="black" stroke-width="3"/>
              <path d="M30 23.5L11.25 37.7894L12.25 12.2106L30 23.5Z" fill="black"/>
              <path d="M40 20.5L22.25 37.7894L19.25 10.2106L40 20.5Z" fill="black"/>
            </svg>
          </div>
        </div>
        <div className="controls__volume--wrapper">
          <div className="controls__volume">
            <Slider
              tooltip={false}
              orientation="vertical"
              style={{
                position: 'relative',
                zIndex: '2',
              }}
              value={this.props.volume}
              onChange={this.props.handleVolumeChange}
            />
          </div>
        </div>
        <div className='video-holder'>
          <ReactPlayer
            width={0}
            height={0}
            volume={this.props.volume / 100}
            playing={this.props.playing}
            url={this.props.currentMusic.src}
          />
        </div>
      </div>
    );
  }
}

export default ControlsMusic;
