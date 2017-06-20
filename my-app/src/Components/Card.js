import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
width: 100%;
border: 2px solid white;
border-radius: 20px;
padding: 10px 20px;
text-align: left;
color: white;
margin: 15px;
`;


const Card = ({episode}) => {
  const {name, image, number,season} = episode;
  let {summary} = episode;
  summary = summary.slice(3, summary.length-4);
    return(
      <CardStyle>
      <p>{name}</p>
      <img alt={''} src={image.medium}/>
      <p>Season: {season}</p>
      <p>Episode: {number}</p>
      <p>{summary}</p>
      </CardStyle>
    )
}
export default Card;
