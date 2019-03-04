import React, { Component } from 'react'
import styled from 'styled-components'
import backgroundImage from '../../images/front.jpg'

const Background = styled.div`
    heihgt: 100%;
    width: 100vw;
    background-image: url(${backgroundImage});
`;
const Header = styled.div`
    font-size: 4rem;
    color: black;
    margin: 4rem 0rem;
    display: flex;
    justify-content: center;
`;

export default class  extends Component {
  render() {
    return (
      <Background>
        <Header>The best neighborhood</Header>
      </Background>
    )
  }
}
