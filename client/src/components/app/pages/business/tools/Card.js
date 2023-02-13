import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import Details from './Details'
import Timings from './Timings'

const Card = () => {
  return (
    <div className='store-card'>
      <Details />
      <Timings />
    </div>
  )
}

export default Card