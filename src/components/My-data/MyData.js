import React from 'react'

const MyData = ({ match }) => (
  <div>
    Minha conta {match.params.id}
  </div>
)

export default MyData