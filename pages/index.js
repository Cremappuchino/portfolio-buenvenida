import React, { Component } from 'react'
import Home from './Home/Home'
import { Header } from 'semantic-ui-react'
import Head from 'next/head'


class App extends Component{
  render(){
    return(
      <div>
        <Home />
      </div>
    )
  }
}

export default App
