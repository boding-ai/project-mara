import React from 'react'
import PropTypes from 'prop-types'

const Spinner = props => {
  return (
      <>
          <div class="loader" style={{'--s':'7px', '--n':15, color:'pink'}}></div>
      </>
  )
}

Spinner.propTypes = {}

export default Spinner