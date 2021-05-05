import React from 'react'
import { Constainer, Disciplinas } from './styles'

const Details: React.FC = () => {

return (
  <Constainer>
    <Disciplinas>
      <ul>
        <li>
          <span>Professor: Joao </span>
          <span>Disciplina: JavaScript</span>
          <span>Dia da Semana: Terça-feira</span>
          <span>Periodo: 2o periodo</span>
          <span>Horário: 18:30/20:30</span>
        </li>
        <li>
          <span>Professor: Joao </span>
          <span>Disciplina: Banco de Dados</span>
          <span>Dia da Semana: Sexta-feira</span>
          <span>Periodo: 5o periodo</span>
          <span>Horário: 20:30/22:00</span>
        </li>
      </ul>
    </Disciplinas>
  </Constainer>
)

}

export default Details
//pagina de detalhes
