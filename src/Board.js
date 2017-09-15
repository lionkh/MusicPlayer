import React, { Component } from 'react';
import './Page.css';
import play from './img/play-button.png';
import player from './img/player.png';
//ed sheeran
import song1 from './audio/Sheeran/Galway Girl.mp3';
import song2 from './audio/Sheeran/Shape of You.mp3';
import divide from './audio/Sheeran/divide.png';
//shawn mendes
import song3 from './audio/Mendes/Ruin.mp3';
import song4 from './audio/Mendes/Mercy.mp3';
import song5 from './audio/Mendes/Treat You Better.mp3';
import illuminate from './audio/Mendes/illuminate.jpg';
import { connect } from 'react-redux';
import Song from './Song.js';


class Board extends React.Component{
  constructor(props){
    super(props);
    this.eachSong = this.eachSong.bind(this);
    this.display = this.display.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.setContent = this.setContent.bind(this);
   
  }
  
  display(i){
      
    
   this.props.screen(i, this.props.tracks);
  }
  setContent(){
    this.props.content(this.state.displayedSongs);
  }

  handleSearch(event){
        this.props.onFindTrack(this.searchInput.value);
      
  }

  eachSong(el, i){
    return (
   <Song clicked = {this.display} key = {i} index = {i} singer = {el.singer} song = {el.songName}/>
      )       
  }

  render(){
    return(
      <div>
      <input onChange = {this.handleSearch} ref = {(input)=> {this.searchInput = input}} className = "search" type="text" placeholder = "Search"/>
      <ul className="board">
            {
            this.props.tracks.map(this.eachSong)
            }
          
     </ul>
    </div>
    )
  }
}

export default connect(
  (state)=>({
     tracks: state.tracks.filter(track => {
         return track.songName.toLowerCase().includes(state.filterTracks.toLowerCase()) 
        || track.singer.toLowerCase().includes(state.filterTracks.toLowerCase())})
}), 
  dispatch=>({
    onFindTrack: (name)=>{
      dispatch({type: 'FIND_TRACK', payload: name.trim()})
    },
}) 
) (Board);