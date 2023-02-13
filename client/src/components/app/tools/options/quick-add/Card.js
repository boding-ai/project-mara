import React from 'react'

const Card = ({
    icon, 
    title
}) => {
  return (
      <div className="quick-add-section flex_middle">
          <div className="app">
              <div>{icon}</div>
              <div style={{ margin: '1em 0 0 0', textAlign: 'center' }} >{title}</div>
          </div>
      </div>
  )
}

export default Card