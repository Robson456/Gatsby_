import React, { Component } from 'react'
import * as El from './style'
import Img from 'gatsby-image'
import {StaticQuery, graphql} from 'gatsby';

export default class index extends Component {
  render() {
    return (
         <StaticQuery
        query = {graphql`
        query PropertyQuery {
          file(relativePath: {eq: "salon2.jpg"}) {
            childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
            }
        }
        }
        `}
        
        render = { data => (
      <El.MainWrapper>
        <El.Text>
            <h1>The Property</h1>
            <p>Ground floor</p>
            <p>1st floor</p>
            <p>2nd floor</p>
            <p>3rd floor</p>
        </El.Text>

          <El.CarouselImage>
    
            <El.CarouselItem>
              <Img fluid={data.file.childImageSharp.fluid}/>
            </El.CarouselItem>
        
          </El.CarouselImage>
        
      </El.MainWrapper>
        )
        }
        />
    )
  }
}
