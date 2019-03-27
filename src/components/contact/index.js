import React, { Component } from 'react'
import * as El from './style'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}


export default class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  onChangeInput = e => {
    const { name, value } = e.target
    this.setState(prevState => ({ ...prevState, [name]: value }))

    e.preventDefault();
  }

  handleSubmit = e => {

    const {name, email, message} = this.state;
    
    const that = this

    console.log('this is what I post: ', this.state)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...{name, email, message} })
    })
    .then((res) => {
        console.log('res', res)
          that.setState({
              name: '',
              email: '',
              message: '',
    
          })

      })
    .catch(error => alert(error));

    e.preventDefault();
  };
  
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
          
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
            <input type="hidden" name="bot-field" />

            <label htmlFor="name">Your Name:</label>   
            <input type="text" name="name"  onChange={this.onChangeInput}/>

            <label htmlFor="email"> Your Email: </label>
            <input type="email" name="email" onChange={this.onChangeInput} />

            <label htmlFor="message">Message: </label>
            <textarea name="message" onChange={this.onChangeInput}></textarea>

            <button type="submit">Send</button>

        </form>
        </El.ContactWrapper>

      </El.MainWrapper>
    )
  }
}