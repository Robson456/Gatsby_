import React, { Component } from 'react'
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Description = [
  {
    text: 'lorem ipsum dolorem est mit dalar whoit',
  },
  {
    text: 'lorem ipsum dolorem est mit dalar whoit lorem ipsum dolorem est mit dalar whoit',
  },
  {
    text: 'lorem ipsum dolorem est mit dalar whoit lorem ipsum dolorem '
  },
  {
    text: 'lorem ipsum dolorem est mit dalar whoitlorem ipsum dolorem est mit dalar whoitlorem ipsum dolorem est mit dalar whoit'
  }
]
const MainWrapper = styled.div`
    // dispaly: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    // margin: 5% 25%;
    // position: relative;

    font-size: 1.5rem;
  line-height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus{
    outline: none !important;
  }
`;

const Quote = styled.blockquote`
font-size: 1.4rem;
  line-height: 2.5rem;
  color: #707070;
  quotes: "\201C""\201D""\2018""\2019" !important;

  ${this}::before{
    content: '"';
    font-size:2.4em;
    position: relative;
    top: 0.5rem;
  }
  ${this}::after {
    content: '"';
    font-size:2.4em;     
    position: relative;
    top: 2.9rem;
    left: 0.3rem;
  }
  
  @media (max-width: 1024px) {
    width: 80%;
  }
`;

const AddWrap = styled.div`
  width: 100%;
  display: flex;
justify-content: center;
text-align:center;
margin: 0 auto;
padding: 5rem 0 5rem 0;
`;


export default class index extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 4000,
      arrows: false,
      autoplay: true,
    };
    return (
      <Slider {...settings}>
          { 
            
            Description.map((item, i) => (
              <div key={`div_slider_${i}`}>
                <MainWrapper>
                    <AddWrap key={`add_wrap${i}`}>
                      
                        <Quote key={`add_wrap_p${i}`}>{item.text}</Quote>
                    </AddWrap>
                </MainWrapper>
              </div>
              )
            )
          }
          </Slider>
    );
  }
}
