import React from 'react'
import { Form } from './styles'

const New: React.FC = () => {

return (
  <Form>
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
