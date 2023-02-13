import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer ,faHeartPulse, faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from '@mui/material'

const Domain = ({ domain }) => {
  return (
      <>
          {domain === 'Tech' && (
              <div
                  className="domain"
                  style={{ backgroundColor: 'rgb(92, 92, 92)' }}
              >
                  <Tooltip title="Post Domain: Technology" placement="top">
                      <FontAwesomeIcon
                          icon={faComputer}
                          style={{ fontSize: 15 }}
                      />
                  </Tooltip>
              </div>
          )}
          {domain === 'Medical' && (
              <div className="domain" style={{ backgroundColor: '#42eb61' }}>
                  <Tooltip title="Post Domain: Medical" placement="top">
                      <FontAwesomeIcon
                          icon={faStethoscope}
                          style={{ fontSize: 15 }}
                      />
                  </Tooltip>
              </div>
          )}
          {domain === 'Health' && (
              <div className="domain" style={{ backgroundColor: '#eb4242' }}>
                  <Tooltip title="Post Domain: Health" placement="top">
                      <FontAwesomeIcon
                          icon={faHeartPulse}
                          style={{ fontSize: 15 }}
                      />
                  </Tooltip>
              </div>
          )}
      </>
  )
}

export default Domain