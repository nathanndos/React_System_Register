import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'

import Header from './components/Header'

import GlobalStyle from './styles/global'

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Header/>
      <Routes/>
    </BrowserRouter>
    <GlobalStyle/>
  </>
)

export default App;
//browserrouter é um tipos de rotamento - permite entender o nome dps do link criado
//yarn add react-router-dom responsavel pelo roteamento da aplicação
//yarn add @types/react-router -D -
//yarn add styled-components
//yarn add @types/styled-components -D -> tipagem do styled components

