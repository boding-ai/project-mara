import React from 'react'
import PropTypes from 'prop-types'

import NavigateNextIcon from '@mui/icons-material/NavigateNext'

const ClientList = ({ letter, loading }) => {
    return (
        <>
            <div className="flex_middle marginT-1">
                <div className="client_list_letter">
                    <i>{letter}</i>
                </div>
                <div style={{ marginTop: '0.6em' }} className={loading ? 'move-icon' : ''} >
                    <NavigateNextIcon
                        style={{
                            fontSize: 25,
                            color: 'rgb(80, 149, 247)',
                        }}
                    />
                </div>
            </div>
        </>
    )
}

ClientList.propTypes = {

}

export default ClientList
