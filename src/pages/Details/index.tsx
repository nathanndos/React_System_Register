import React, { useState} from 'react'
import {useRouteMatch} from 'react-router-dom';
//permite pegar o parametro na rota

import { Constainer, Disciplinas } from './styles'

interface ProfessoresParametros{
  professor: string;
}
interface Cadastro{
  disciplina:string;
  professor: string;
  diasemana: string;
  periodo:string;
  horario:string;
}

const Details: React.FC = () => {
  const { params } = useRouteMatch<ProfessoresParametros>();
  const [professores, setProfessores] = useState<Cadastro[]>(() => {
    const storagedProfessores = localStorage.getItem(
      '@professores:cadastro'
    )
    if(storagedProfessores){
      return JSON.parse(storagedProfessores);
    }
    return[]
  });
  let detalhesProfessor = []
  detalhesProfessor = professores.filter(prof =>
    prof.professor === params.professor
  )

return (
  <Constainer>
    <Disciplinas>
      <ul>
        {detalhesProfessor.map((prof, indice)=>
          <li key={indice}>
          <span>Professor: {prof.professor} </span>
          <span>Disciplina: {prof.disciplina}</span>
          <span>Dia da Semana: {prof.diasemana}</span>
          <span>Periodo: {prof.periodo}</span>
          <span>Horário: {prof.horario}</span>
        </li>
        )}
      </ul>
    </Disciplinas>
  </Constainer>
)

}

export default Details
//pagina de detalhes
