import React, { Component } from 'react'
import * as El from './style'

const windowGlobal = typeof window !== 'undefined' && window;

const navigation = [
    {
        name: 'Loctaion',
        path: '/location',
    },
    {
        name: 'Property',
        path: '/property',
    },
    {
        name: 'Gallery',
        path: '/gallery',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
    {
        name: 'Booking',
        path: '/booking',
    },
    
    

];

export default class index extends Component {
    state = {
        collapsed: false,
        path: '/'
      }
    
      UNSAFE_componentWillMount(){
        const path = windowGlobal ? windowGlobal.location.pathname : false
        this.setState(prevState => ({path: path}))
        
      }
    
      handleCollapseMenu = () => this.setState(prevState => ({collapsed: !prevState.collapsed}), console.log('click'))
    
  render() {
    const { collapsed } = this.state

    return (
      <El.MainWrapper>
          <El.Wrapper>

          <El.Logo>
            <h1>Home Rental</h1>
           </El.Logo> 
           <El.HamburgerMenu
                  className={collapsed ? 'isOpen' : ''}
                  onClick={this.handleCollapseMenu}
                  >
                  <div />
                  <div />
                  <div />
                </El.HamburgerMenu>
            <El.Nav>
            {
                navigation.map((item, i) => {
                    return (
                        <El.StyledLink activeStyle={{color: 'black', paddingLeft: '5px', borderBottom: 'red solid 4px'}} key = {`menu_desktop_link${i}`} to={item.path}> 
                        
                        {item.name}
                        
                        </El.StyledLink>)
                    }
                )
            }
            </El.Nav>
          </El.Wrapper>
        <El.Mobile isVisable={collapsed}>
        {
            navigation.map((item, i) => {
                return (
                    <El.StyledLink activeStyle={{color: 'black', paddingLeft: '5px', borderBottom: 'red solid 4px'}} key = {`menu_desktop_link${i}`} to={item.path}> 
                    
                    {item.name}
                    
                    </El.StyledLink>)
                }
            )
        }
        </El.Mobile>
      </El.MainWrapper>
    )
  }
}
