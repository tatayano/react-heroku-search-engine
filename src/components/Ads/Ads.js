import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import MyData from '../My-data/MyData'
import MyAccount from '../My-account/MyAccount'

const Ads = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/principal/teste-react.jsp/anuncios/1">Pagina 2 filho 1</NavLink>
      </li>
      <li>
        <NavLink to="/principal/teste-react.jsp/anuncios/2">Pagina 2 filho 2</NavLink>
      </li>
    </ul>
    <Route path="/principal/teste-react.jsp/minha-conta" component={MyData} />
    <Route path="/principal/teste-react.jsp/anuncios/:id" component={MyAccount} />
  </div>
)

export default Ads