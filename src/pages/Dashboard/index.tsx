import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'

const Dashboard: React.FC = () => {

return(
  <Container>
    <ul>
      <li><Link to="/details">Joao</Link></li>
      <li><Link to="/details">Maria</Link></li>
      <li><Link to="/details">Pedro</Link></li>
      <li><Link to="/details">Carlos</Link></li>
    </ul>
  </Container>
)

}

export default Dashboard
//lista todos
