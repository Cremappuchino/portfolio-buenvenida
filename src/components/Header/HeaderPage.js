import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class HeaderPage extends Component {
  
  state = {
    activeItem : 'Home'
  }

  handleClickMenu = (name) =>{
    this.setState({ activeItem: name })
  }
  
  render() {
    const { activeItem } = this.state
    return (
      <Menu secondary borderless inverted style={styles.Menu}>
        <Menu.Item name='Home' active = {activeItem === 'Home'} onClick={() => {this.handleClickMenu('Home')}} />
        <Menu.Item name='Apps' active = {activeItem === 'Apps'} onClick={() => {this.handleClickMenu('Apps')}}  />
        <Menu.Item name='Photo' active = {activeItem === 'Photo'} onClick={() => {this.handleClickMenu('Photo')}} />
        <Menu.Item name='Profile' active = {activeItem === 'Profile'} onClick={() => {this.handleClickMenu('Profile')}} />
      </Menu>
    )
  }
}

const styles = {
  Menu: {
    margin: 15,
  },
  Item: {
    backgroundColor : '#EEEFF7',
    fontFamily: 'Open Sans',
    padding: 15,
    margin: 10,
    borderWidth: 0,
  }
}

export default HeaderPage
