import React, { Component } from 'react';
import { connect } from 'react-redux';

class Song extends React.Component{
  constructor(props){
    super(props);
    this.pressed = this.pressed.bind(this);
  }

  
  pressed(){
      var songs = this.props.tracks;
    this.props.clicked(this.props.index)
   
  }

  render(){
    return(
      <li className = 'song' onClick = {this.pressed} >
        <a className = "play"></a>
        <div className = 'song-info'>
          <h3> {this.props.singer}</h3>
          <h4> {this.props.song} </h4>
        </div>
      </li>
    )

  }

}
 export default connect(
  (state)=>({
     tracks: state.tracks.filter(track => track.songName.includes(state.filterTracks))
})
 
)(Song);