import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'

import {
    changeSidebarLockSettings,
    changeSystemNotificationsSettings,
    changeAllNotificationsSettings,
    changeClientsListTypeSettings,
} from '../../../../../../redux/actions/settings/system/system'
import SelectElement from './SelectElement'
import MultiElement from './multi/MultiElement'

const System = ({
    innerRef,
    // Redux Actions
    changeSidebarLockSettings,
    changeSystemNotificationsSettings,
    changeAllNotificationsSettings,
    changeClientsListTypeSettings,
    // Redux States
    sidebar: { hoverDisabled, hoverDisabledNativeSetting },
    notifications: { systemNotifications, allNotifications },
    clients: { clientsType },
}) => {
    const [clientsTypeNew, setClientsTypeNew] = useState(clientsType)

    const changeSidebarLock = () => {
        if (hoverDisabled) {
            changeSidebarLockSettings(true, false)
        } else {
            changeSidebarLockSettings(false, true)
        }
    }

    const changeSystemNotifications = () => {
        if (systemNotifications) {
            changeSystemNotificationsSettings(true, false)
        } else {
            changeSystemNotificationsSettings(false, true)
        }
    }

    const changeAllNotifications = () => {
        if (allNotifications) {
            changeAllNotificationsSettings(true, false)
        } else {
            changeAllNotificationsSettings(false, true)
        }
    }

    const changeClientsTypeSettings = (e) => {
        changeClientsListTypeSettings(clientsType, e.target.value)
    }

    return (
        <div className="section" ref={innerRef}>
            <div className="title flex_middle">System</div>
            <div style={{ marginTop: '50px' }}>
                <SelectElement
                    title={'Sidebar Hover Lock'}
                    details={
                        'Control whether the sidebar enlarges when hovered or keep it locked.'
                    }
                    first={true}
                    checked={hoverDisabledNativeSetting}
                    onChangeSelect={changeSidebarLock}
                />
            </div>
            <div>
                <SelectElement
                    title={'System Notifications'}
                    details={
                        'Control whether you want to receive in-app notifications from Bodinga regarding new changes, offers, tips and more.'
                    }
                    first={true}
                    checked={systemNotifications}
                    onChangeSelect={changeSystemNotifications}
                />
            </div>
            <div>
                <SelectElement
                    title={'All Notifications'}
                    details={'Enable or disable all in-app notifications.'}
                    first={true}
                    checked={allNotifications}
                    onChangeSelect={changeAllNotifications}
                />
            </div>
            {/* <div>
                <MultiElement
                    title={'Clients List Type'}
                    details={
                        'The default list to be loaded when the Clients page is opened.'
                    }
                    first={true}
                    value={clientsType}
                    onChange={changeClientsTypeSettings}
                    options={['all', 'owners', 'pets']}
                />
            </div> */}
        </div>
    )
}

System.propTypes = {
    clients: PropTypes.object.isRequired,
    sidebar: PropTypes.object.isRequired,
    notifications: PropTypes.object.isRequired,
    changeSidebarLockSettings: PropTypes.func.isRequired,
    changeSystemNotificationsSettings: PropTypes.func.isRequired,
    changeAllNotificationsSettings: PropTypes.func.isRequired,
    changeClientsListTypeSettings: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    sidebar: state.sidebar,
    notifications: state.notifications,
    clients: state.clients,
})

const mapStateToActions = {
    changeSidebarLockSettings,
    changeSystemNotificationsSettings,
    changeAllNotificationsSettings,
    changeClientsListTypeSettings,
}

export default connect(mapStateToProps, mapStateToActions)(System)
