import React, { Component } from 'react'
import {
  Container,
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  SideBar,
  Visibility
} from 'semantic-ui-react'
import Head from 'next/head'
import HeaderPage from '../../src/components/Header/HeaderPage'



class Home extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Cremappuchino</title>
          <link rel="stylesheet" href="../../static/styles/styles.css" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,600,700" rel="stylesheet" />
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <style>{`
            body {
              background-color: #1C1D21
            }
          `}</style>
        </Head>

          <HeaderPage />

          <div className='Root-Component'>
            <Container>
              <Header>
                <Header.Content as='h1'>
                  Buenvenida
              </Header.Content>
                <Header.Subheader>
                  <h3>Hi, I'm Tifo</h3>
                </Header.Subheader>
                <Header.Subheader>
                  <h3>a React-Native Developer</h3>
                </Header.Subheader>
                <Header.Subheader>
                  <h3>an Entity that turning caffeinees into a code</h3>
                </Header.Subheader>
              </Header>
            </Container>
          </div>

      </div>

        )
      }
    }
    
    export default Home
    
