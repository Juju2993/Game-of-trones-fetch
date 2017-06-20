import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card';
import styled from 'styled-components';

const Container =styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
`;

const Header = styled.h2`
display: flex;
justify-content: center;
color: white;
font-size: 40px;
`;

const BoxWrapper = styled.div`
display: flex;
justify-content: space-around;
flex-direction: row;
width: 80%;
height: 80%;
border: 2px solid white;
border-radius: 20px;
padding: 20px 20px;


`;

const Prev = styled.img`
diaplay: flex;
width: 45px;
height: 45px;
border: 5px solid white;
border-radius: 10px;
margin: 5px;
background-color: white;
align-self: center;
`;

const Next = styled.img`
display: flex;
width: 45px;
height: 45px;
border: 5px solid white;
border-radius: 10px;
margin: 5px;
background-color: white;
align-self: center;
`;

const leftArrow = 'http://alexoliveira.me/Hawaii/images/chevron-left.png';
const rightArrow = 'http://alexoliveira.me/Hawaii/images/chevron-right.png';
const rootUrl = 'http://api.tvmaze.com/singlesearch/shows?q=game-of-thrones&embed=episodes';


class App extends Component {



  state = {episodes: [], starting_index: 0}

  async dataFetch(){
    try {
  const link = await fetch(rootUrl);
  const data = await link.json();
  console.log(data._embedded.episodes);
  this.setState({episodes: data._embedded.episodes});
        } catch (e) {
  console.error(e);
    }
}

componentDidMount(){
  this.dataFetch()
}

  nextHandler = () => {
  const firstEpisode = this.state.starting_index;
  let secondEpisode = firstEpisode + 3;
  if (secondEpisode > this.state.episodes.length - 2){
    secondEpisode = this.state.episodes - 2
  }
  this.setState({firstEpisode : secondEpisode})
}

  prevHandler = () => {
  const firstEpisode = this.state.starting_index;
  let prevEpisode = firstEpisode - 3;
  if (prevEpisode < 0){
    prevEpisode = 0
  }
  this.setState({firstEpisode : prevEpisode})
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
          <Header>Game of thrones</Header>
          <Container>
        <BoxWrapper>
          <Prev src={leftArrow} onClick={this.prevHandler}></Prev>
          <Card episode={this.state.episodes[this.state.starting_index]} />
          <Card episode={this.state.episodes[this.state.starting_index+1]} />
          <Card episode={this.state.episodes[this.state.starting_index+2]} />
          <Next src={rightArrow} onClick={this.nextHandler}></Next>
          </BoxWrapper>
          </Container>
      </div>
    );
  }
}

export default App;
