import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'

const NoPets = props => {
  return (
      <div className=''>
          <div className="flex_middle" style={{ margin: '1em 0' }} >
              <div style={{ marginRight: '0.4em', fontSize: 18, color: 'grey' }}>
                  <FontAwesomeIcon icon={faDog} />
              </div>
              <div style={{ color: 'grey', fontSize: '1.5em' }} >No Pets</div>
          </div>
          <div style={{ color: 'grey', fontSize: '1.1em' }} >There are no pets added for this owner! Try adding one!</div>
      </div>
  )
}

NoPets.propTypes = {}

export default NoPets