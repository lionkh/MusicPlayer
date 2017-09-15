import React, { Component } from 'react';
import './Page.css';
import play from './img/play-button.png';
import player from './img/player.png';

import { connect } from 'react-redux';
import Song from './Song.js';
import Board from './Board.js';



class Page extends React.Component{

  //тут ловим клик и в рендере вызываем функцию 1 или 2
  constructor(props){
    super(props);
    this.renderPlayer = this.renderPlayer.bind(this);
    this.renderStandart = this.renderStandart.bind(this);
    this.playerDisplay = this.playerDisplay.bind(this);
    //this.content = this.content.bind(this);
    this.state = {
      player: false,
      displayedSongs: this.props.tracks,
      display: 'none',
    }
  }

  playerDisplay(i, songs){
  
    this.setState({
      player: false,
     display: 'none',
    
         })
    this.render();
    
      setTimeout(()=> {
     this.setState({
      player: i,
      display: 'player',
     displayedSongs: songs
    
    })
  }, 0.00001);
         
}


  renderStandart(){
    return(
       <div>
         <div className="navbar">
          <a href = '#'>          
          <div className="info-navbar" src = '#'>
            <img src={player} alt="" className="logo"/>
            </div>
           <h1>player</h1></a>
         </div>
        <Board screen = {this.playerDisplay} displayedSongs = {this.state.displayedSongs}/>
        <div className="inner">
        
        </div>
      </div>
    )
  }



  renderPlayer(){
    return(
      <div className = "main">
      <div className="navbar">
          <a href = '#'>          
          <div className="info-navbar" src = '#'>
            <img src={player} alt="" className="logo"/>
            </div>
           <h1>player</h1></a>
         </div> 
         <Board screen = {this.playerDisplay}/>
        <div className="inner">
      <div className = "displayer">
          <div>
              <img src={this.state.displayedSongs[this.state.player].image} alt=""/>  
          </div>
      <div>
            <h3 className = "songName">
            {this.state.displayedSongs[this.state.player].singer}        —       {this.state.displayedSongs[this.state.player].songName}</h3>
          </div>
          <audio autoPlay="autoplay" controls>
            <source src = {this.state.displayedSongs[this.state.player].song}/>
          </audio>  
          </div>
        </div>
      </div>
    )

  }

  render(){
      if(this.state.display == "player"){
       return this.renderPlayer();
      }

      else if (this.state.display == "none"){
        return this.renderStandart();
      }
    
  }
}






export default connect(
  (state)=>({
     tracks: state.tracks.filter(track => track.songName.includes(state.filterTracks))
})
)(Page);


