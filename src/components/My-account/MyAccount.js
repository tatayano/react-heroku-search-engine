import React from 'react'

const MyAccout = ({ match }) => (
  <div>
    Minha conta { match.params.id }
  </div>
)

export default MyAccout