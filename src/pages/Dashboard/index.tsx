import React, { useState} from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'

interface Cadastro {
  disciplina: string;
  professor: string;
  diaSemana: string;
  periodo: string;
  horario: string;
}

const Dashboard: React.FC = () => {

  const [professores, setProfessores] = useState<Cadastro[]>(() => {
    const storagedProfessores = localStorage.getItem(
      '@professores:cadastro'
    )
    if(storagedProfessores){
      return JSON.parse(storagedProfessores)
    }
      return []
  })
  //console.log(professores)
  let professorUnico = []
  professorUnico = Array.from(new Set(professores.map(prof => prof.professor)))
  console.log(professorUnico)

  return(
    <Container>
      <ul>
        {professorUnico.map((professor, indice)=>
          <li key={indice}>
          <Link to={`/details/${professor}`}>{professor}</Link>
        </li>
        )}
      </ul>
    </Container>
  )

}

export default Dashboard
//lista todos
