import song1 from '../audio/Sheeran/Galway Girl.mp3';
import song2 from '../audio/Sheeran/Shape of You.mp3';
import divide from '../audio/Sheeran/divide.png';
//shawn mendes
import song3 from '../audio/Mendes/Ruin.mp3';
import song4 from '../audio/Mendes/Mercy.mp3';
import song5 from '../audio/Mendes/Treat You Better.mp3';
import illuminate from '../audio/Mendes/illuminate.jpg';


var initialState = [
{
  image: divide,
  singer: 'Ed Sheeran',
  songName: 'Galway Girl',
  song: song1,
  album: 'Divide'
},
{
  image: divide,
  singer: 'Ed Sheeran',
  songName: 'Shape of You',
  song: song2,
  album: 'Divide'
},
{
  image: illuminate,
  singer: 'Shawn Mendes',
  songName: 'Ruin',
  song: song3,
  album: 'Illuminate'
},
{
  image: illuminate,
  singer: 'Shawn Mendes',
  songName: 'Mercy',
  song: song4,
  album: 'Illuminate'
},
{
  image: illuminate,
  singer: 'Shawn Mendes',
  songName: 'Treat You Better',
  song: song5,
  album: 'Illuminate'
},
{
  image: '',
  singer: 'Linkin Park',
  songName: 'Talking to Myself',
  song: '',
  album: 'One More Light'

},

{
  image: '',
  singer: 'Linkin Park',
  songName: 'Numb',
  song: '',
  album: 'Hybrid Theory'
}]

export default function tracks (state = initialState, action){
    return state;
}