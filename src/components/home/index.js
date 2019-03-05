import React, { Component } from 'react';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import backgroundImage from '../../images/front.jpg';
import Card from '../card/index';


const Background = styled.div`
    width: 100%;
    height: auto;
    position: relative;
`;
const Header = styled.div`
    font-size: 4rem;
    color: black;
    margin: 2rem 0rem;
    z-index: 1;
    display: flex;
    justify-content: center;
    position: absolute;
`;

export default class  extends Component {
  render() {
    return (
       <StaticQuery
        query = {graphql`
        query HeaderQuery {
          file(relativePath: {eq: "front.jpg"}) {
            childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
            }
        }
        }
        `}
        
        render = { data => (
          <>
            <Background >
              {/* <Header>The best neighborhood</Header> */}
              <Img fluid={data.file.childImageSharp.fluid} />
            </Background>
            <Card/>
            
          </>
        )
        }
      />
    )
  }
}
