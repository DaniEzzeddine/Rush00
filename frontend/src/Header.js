
import React from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Icon,
    Menu,
  } from 'semantic-ui-react'
class TopHeader extends React.Component {
render(){
    return (
<Menu fixed='top' inverted>
      <Container>
        <Link to="/">
        <Menu.Item as='a' header>
          E-shop
        </Menu.Item>
        </Link>
        <Link to="/login">
        <Menu.Item as='a' header>
        Signin
          
        </Menu.Item>
        </Link>
        <Link to="/cart">
        <Menu.Item as='a' position="right" header>
        <Icon name="fitted cart"></Icon>
        </Menu.Item>
        </Link>
        
      </Container>
    </Menu>

    )
}

}

export default TopHeader