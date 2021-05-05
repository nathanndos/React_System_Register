import React, { useState} from 'react'
import { Form } from './styles'

interface Cadastro {
  disciplina: string;
  professor: string;
  diaSemana: string;
  periodo: string;
  horario: string;
}

const New: React.FC = () => {
  const [professores, setProfessores] = useState([])

  function handleAddProfessores(event: any){
    event.preventDefault()// quando os dados forem preenchidos e enviados, a pagina nao sera recarregada

    const { target:form} = event

    const novoCadastro = {
      disciplina: form.disciplina.value,
      professor: form.professor.value,
      diaSemana: form.diaSemana.value,
      periodo: form.periodo.value,
      horario: form.horario.value,
     }
     console.log(novoCadastro);

  }

return (
  <Form onSubmit={handleAddProfessores}>
    <input type="text" name="disciplina" placeholder="Disciplina"/>
    <input type="text" name="professor" placeholder="Professor"/>
    <input type="text" name="diaSemana" placeholder="Dia Semana"/>
    <input type="text" name="periodo" placeholder="Periodo"/>
    <input type="text" name="horario" placeholder="Horario"/>
    <button type="submit">Enviar</button>
  </Form>
)
}
export default New
//pagina de cadastro
