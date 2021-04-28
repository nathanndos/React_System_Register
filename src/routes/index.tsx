//configuração de rotas
import React from 'react'

import {Switch, Route} from 'react-router-dom'
//switch possbilita escolher uma pagina por vez
//route determina qual componente vai ser exibido
import Dashboard from '../pages/Dashboard'
import Details from '../pages/Details'
import New from '../pages/New'

const Routes: React.FC = () =>(
  <Switch>
    <Route path="/" exact component={Dashboard}/>
    <Route path="/new" component = {New}/>
    <Route path = "/details" component ={Details}/>
  </Switch>
)
//exact component garante que na url seja exatamante a barra
export default Routes;
