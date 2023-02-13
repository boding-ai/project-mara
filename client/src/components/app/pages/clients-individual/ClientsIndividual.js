import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ClientInfo from './leftbar/ClientInfo'
import StoriesClientMain from './stories/StoriesClientMain'
import MetricsClient from './metrics/MetricsClient'

import NavbarHome from '../../tools/bars/navbar/Navbar'

import api from '../../../../utils/api'

const ClientsIndividual = props => {
    const [isMetricsOpen, setIsMetricsOpen] = useState(false)
    const [data, setData] = useState({
    })

    useEffect(() => {
        
        if(window.location.pathname.split('/')[3]) {
            async function fetchData() {
                const body = JSON.stringify({
                    ownerID: window.location.pathname.split('/')[4],
                })
                const res = await api.post('/get-owner-details', body)

                setData(res.data)
            }

            fetchData()
        }
    },[])

    // useEffect(() => {
    //     async function fetchData() {
    //         // You can await here
    //         const response = await MyAPI.getData(someId)
    //         // ...
    //     }
    //     fetchData()
    // }, [someId])

    const onToggleMetricsInMiddle = () => {
        setIsMetricsOpen(true)
    }

    const onToggleEventsInMiddle = () => {
        setIsMetricsOpen(false)
    }

    return (
        <>
            <NavbarHome />
            <div className="">
                <ClientInfo
                    onToggleMetricsInMiddle={onToggleMetricsInMiddle}
                    onToggleEventsInMiddle={onToggleEventsInMiddle}
                    isMetricsOpen={isMetricsOpen}
                />
                <div className="clients_grid">
                    <StoriesClientMain />
                </div>
                <MetricsClient />
            </div>
        </>
    )
}

ClientsIndividual.propTypes = {

}

export default ClientsIndividual
