import React, { Component } from 'react';
import Img from 'gatsby-image';
import * as El from './style';
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
                    <h1>Gallery</h1>
                    <El.Image>
                        <Img  />
                    </El.Image>
                    <El.Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto rem quas deserunt! Impedit, obcaecati ipsa? Earum laboriosam placeat reiciendis sit pariatur corrupti itaque reprehenderit quisquam quae nemo. Pariatur, odit consequuntur.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ut rem labore, fugit a totam error natus! Nulla, atque voluptate. Quidem fugit voluptas amet aperiam! Officia numquam incidunt distinctio sed.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laborum aut, illum minus in perferendis repudiandae voluptas, magni autem doloribus itaque quisquam, cumque maiores quis deleniti aspernatur odio nisi excepturi!
                    </El.Text>
    
                </El.MainWrapper>
        )
      }
      />
    )
  }
}
