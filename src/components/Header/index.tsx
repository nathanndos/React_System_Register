import React from 'react'
import { Container, Content } from './header'
import {Link} from 'react-router-dom'

const Header: React.FC =() =>{
  return(
    <Container>
      <Content>
        <Link to="/new">
          <button type="button">Novo cadastro</button>
        </Link>
        <Link to="/">
          <button type="button">Listagem</button>
        </Link>
      </Content>
    </Container>
  )
}

export default Header
