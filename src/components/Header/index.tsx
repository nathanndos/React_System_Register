import React from 'react'
import { Container, Content } from './header'

const Header: React.FC =() =>{
  return(
    <Container>
      <Content>
        <button type="button">Novo cadastro</button>
        <button type="button">Listagem</button>
      </Content>
    </Container>
  )
}

export default Header
