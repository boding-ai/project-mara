import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faNewspaper, faAtom } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from '@mui/material'

const Type = ({ type }) => {
  return (
      <div className="flex_middle">
          {type === 'announcement' && (
              <Tooltip title="Post Type: Announcement" placeholder="top">
                  <div
                      style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          padding: '0.1em',
                          backgroundColor: '#f0f011',
                          cursor: 'context-menu',
                      }}
                      className="flex_middle"
                  >
                      <FontAwesomeIcon
                          icon={faBullhorn}
                          style={{ color: 'white', fontSize: 16 }}
                      />
                  </div>
              </Tooltip>
          )}
          {type === 'article' && (
              <Tooltip title="Post Type: Article" placeholder="top">
                  <div
                      style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          padding: '0.1em',
                          backgroundColor: '#f01136',
                          cursor: 'context-menu',
                      }}
                      className="flex_middle"
                  >
                      <FontAwesomeIcon
                          icon={faNewspaper}
                          style={{ color: 'white', fontSize: 16 }}
                      />
                  </div>
              </Tooltip>
          )}
          {type === 'research' && (
              <Tooltip title="Post Type: Research" placeholder="top">
                  <div
                      style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          padding: '0.1em',
                          backgroundColor: '#1180f0',
                          cursor: 'context-menu',
                      }}
                      className="flex_middle"
                  >
                      <FontAwesomeIcon
                          icon={faAtom}
                          style={{ color: 'white', fontSize: 16 }}
                      />
                  </div>
              </Tooltip>
          )}
      </div>
  )
}

export default Type