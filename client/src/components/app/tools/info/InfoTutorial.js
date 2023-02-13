import React from 'react'
import { Popup } from 'semantic-ui-react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { Link } from 'react-router-dom'
import { Tooltip } from '@mui/material'

const InfoTutorial = ({
    url,
    size,
    message
}) => {
  return (
      <>
          <Tooltip title={message} placement='left' >
              <Link to={url} target="_blank" rel="noreferrer nofollow">
                  <HelpOutlineIcon
                      className="info-tutorial"
                      style={{ fontSize: size }}
                  />
              </Link>
          </Tooltip>
      </>
  )
}

export default InfoTutorial