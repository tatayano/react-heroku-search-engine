import React from 'react'
import PropTypes from 'prop-types'

import '@material/button/dist/mdc.button.min.css';
import { Button } from 'rmwc/Button';

const Link = ({ active, children, onClick }) => (
  <Button
    onClick={onClick}
    disabled={active}
  >
    {children}
  </Button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link