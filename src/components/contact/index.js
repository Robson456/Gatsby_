import React, { Component } from 'react'
import * as El from './style'

export default class index extends Component {
  render() {
    return (
      <El.MainWrapper>
        <El.Wrapper>
            <h1>Contact</h1>
            <h2>Adress</h2>
            <p>lorem ipsum dolor </p>
            <h2>Email</h2>
            <p>sample@gmail.com </p>
            <h3>Contact owners</h3>
            <p>sample.info@gmail.com </p>
            

        </El.Wrapper>
        <El.ContactWrapper>
          
        <form  value="" name="contact" method="POST" data-netlify="true">
          <p>
            <label>Your Name: <input type="text" name="name" /></label>   
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        </El.ContactWrapper>

      </El.MainWrapper>
    )
  }
}
