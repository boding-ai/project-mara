import React from 'react'

import { Button } from '@mui/material'

import InstagramIcon from '@mui/icons-material/Instagram'

const NotConnected = () => {
        const setUpInsta = () => {
            let appId = '996712287606163'
            let redUri = 'https://localhost:8080/api/social/insta'
            let url = `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redUri}&scope=user_profile,user_media&response_type=code`
            window.open(url, '_blank').focus()
        }
        
  return (
      <div>
          <div className="connect-insta app">
              <div className="title">
                  <div className="flex_middle">
                      <InstagramIcon />{' '}
                      <div style={{ marginLeft: '0.5em' }}>Not Connected</div>
                  </div>
              </div>
              <div className="flex_middle element">
                  Add your IG username in the{' '}
                  <b style={{ marginLeft: '0.3em' }}>Settings</b>.
              </div>
              <div className="flex_middle element">
                  Log in to your Instagram Account in the same browser as
                  bodinga.com
              </div>
              <div className="flex_middle element">
                  Click on the button below
              </div>
              <div className="element flex_middle">
                  <Button
                      endIcon={<InstagramIcon />}
                      variant="outlined"
                      size="small"
                      onClick={setUpInsta}
                  >
                      Connect
                  </Button>
              </div>
              <div className="flex_middle element">
                  In the new window, Instagram will ask for user permission.
                  Click on <b style={{ marginLeft: '0.3em' }}>Allow.</b>
              </div>
              <div className="flex_middle element">
                  Viola! Your account will be
                  <b style={{ marginLeft: '0.3em' }}>connected!</b>
              </div>
          </div>
      </div>
  )
}

export default NotConnected