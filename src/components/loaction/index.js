import React, { Component } from 'react';
import * as El from './style';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';


export default class index extends Component {
    render() {
    return (
        <StaticQuery
        query = {graphql`
        query LocationQuery {
          file(relativePath: {eq: "basement.jpg"}) {
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
        <El.MainWrapper>
          <El.Image>
              <Img fluid={data.file.childImageSharp.fluid}/>
          </El.Image>
          <El.Text>
            <h1>Locations</h1>
            <p>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus numquam cum adipisci laborum, dolor molestias 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus numquam cum adipisci laborum, dolor molestias 
            </p>
          </El.Text>
        </El.MainWrapper>
          <El.ButtonWrapper>
            <button>Photos</button>
          </El.ButtonWrapper>
      </>
    )
  }
  />
)
}
}
