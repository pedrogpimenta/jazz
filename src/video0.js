import React, { useRef, useEffect } from 'react'
import ReactPlayer from 'react-player'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      load: false,
      playing: false,
    }
  }

  onClickPlay = () => {
    console.log('ola')
    const playState = this.state.playing
    
    this.setState({
      load: true,
      playing: !playState,
    })
  }

  render() {
    return (
      <div className="App">
        <div>embed</div>
        <div onClick={this.onClickPlay}>play</div>
        <div>
          {this.state.load &&
            <ReactPlayer
              width={0}
              height={0}
              playing={this.state.playing}
              url='https://www.youtube.com/watch?v=j9QXpfvgSVk'
            />
          }
        </div>
      </div>
    );
  }
}

export default App;
