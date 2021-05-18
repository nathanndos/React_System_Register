import React, { useEffect, useState} from 'react'
import { Form } from './styles'

interface Cadastro {
  disciplina: string;
  professor: string;
  diaSemana: string;
  periodo: string;
  horario: string;
}

const New: React.FC = () => {
  const [professores, setProfessores] = useState<Cadastro[]>(() => { //useState<Tipo>('valor inicial')
    const storagedProfessores = localStorage.getItem(
      '@professores:cadastro'
    )
    if(storagedProfessores){
      return JSON.parse(storagedProfessores)
    }
      return []
  })
  //define que o estado é um array de objeto. O objeto é defino criando uma interface

  useEffect(() =>{
    localStorage.setItem(//gravar no banco de dados
      '@professores:cadastro',
      JSON.stringify(professores)//converto o objeto em string
    )
  },[professores]);
  //primeiro parametro executa na priumeira vez
  //segundo OU toda vez que o estado professores mudar

  function handleAddProfessores(event: any){ //Pegando o evento de formulario passado na hora da chamada
    event.preventDefault()// quando os dados forem preenchidos e enviados, a pagina nao sera recarregada

    const { target: form} = event

    const novoCadastro = {
      disciplina: form.disciplina.value,
      professor: form.professor.value,
      diaSemana: form.diaSemana.value,
      periodo: form.periodo.value,
      horario: form.horario.value,
     }
     console.log(novoCadastro);

     setProfessores([...professores,novoCadastro])
     //imutabilidade
     //...spread operator
     form.reset()
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
