import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      episodes: []
    }
  }

  state = {name: '', number: 0, summary: '', season: 0, image:'image'}

  async componentDidMount(){
  const link = await fetch('http://api.tvmaze.com/singlesearch/shows?q=game-of-thrones&embed=episodes')
  const data = await link.json();
  console.log(data._embedded.episodes);
  this.setState({episodes: data._embedded.episodes});
  const visibleEpisodes = [];
  for (let i=0; i<3; i++){
    visibleEpisodes.push(episodes[i]);
  }
  this.setState({episodes, visibleEpisodes})
}



  render() {
    this.state = {episodes: [], visibleEpisodes: [], startingEpisode: 0};
    for(let i=this.state.startingEpisode[i]; i <= 0+3; i++) {

    }
    return (
      <div className="App">
        <div className="header">
          <h2>Game of thrones</h2>
        </div>
<div>
        <p>{this.state.visibleEpisodes[0].name}</p>
        <p>{this.state.visibleEpisodes[1].name}</p>
        <p>{this.state.visibleEpisodes[2].name}</p>
</div>
      </div>
    );
  }
}

export default App;
