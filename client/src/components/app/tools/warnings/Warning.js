import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faSkullCrossbones,
    faExclamationCircle
} from '@fortawesome/free-solid-svg-icons'

const Warning = ({ close, primaryMessage, secondaryMessage, type, action }) => {
                                                                                                                                 
  return (
      <>
          <div className="disconnect-ig-warning">
              <div className="message flex_middle">
                  {
                      (type === 'delete' && (
                          <FontAwesomeIcon
                              icon={faSkullCrossbones}
                              style={{ color: 'red' }}
                          />
                      ))
                  }
                  {
                      (type === 'warning' && (
                          <FontAwesomeIcon
                              icon={faExclamationCircle}
                              style={{ color: 'orange' }}
                          />
                      ))
                  }
                  <div style={{ marginLeft: '0.5em' }}>{primaryMessage}</div>
              </div>
              <div className="warning flex_middle" style={{ marginTop: '2em' }} >{secondaryMessage}</div>
              <div
                  className="flex_middle special-buttons"
                  style={{ marginTop: '2em' }}
              >
                  <div style={{ marginRight: '1.3em' }}>
                      <button
                          className="button-yes flex_middle"
                          onClick={action}
                      >
                          <div className="flex_middle">
                              <div>Yes</div>
                          </div>
                      </button>
                  </div>
                  <div>
                      <button className="button-no" onClick={() => close()}>
                          No
                      </button>
                  </div>
              </div>
          </div>
      </>
  )
}

Warning.propTypes = {}

export default Warning