import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { styled } from '@mui/material/styles'
import { Popup } from 'semantic-ui-react'
import { makeStyles } from '@mui/styles'

import {
    Button,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Collapse,
    IconButton,
    Typography,
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    width: '1em',
    height: '1em',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

const UpdateClientAppointment = props => {
    const [expanded, setExpanded] = useState(false)


    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <>
            <Card
                className="update_clients"
                style={{
                    boxShadow: '0px 0px 6px -3px rgba(15, 15, 15, 0.75)',
                    borderRadius: '10px',
                    backgroundColor: '#f8f8b0',
                    // backgroundColor: 'rgb(240, 240, 25)',
                }}
            >
                <div>
                    <Popup
                        trigger={
                            <div className="show">
                                <div>Pet Name</div>
                                <div>Date</div>
                                <div>Time</div>
                                <div>
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <Popup
                                            trigger={<ExpandMoreIcon />}
                                            inverted
                                            content="Expand More"
                                            size="mini"
                                            position="top center"
                                            basic
                                            style={{
                                                height: '7px',
                                                padding: '1px 5px 16px 5px',
                                                fontSize: '10px',
                                                fontWeight: 'bold',
                                                borderRadius: '5px',
                                                marginBottom: '1em',
                                                background: '#000',
                                            }}
                                        />
                                    </ExpandMore>
                                </div>
                            </div>
                        }
                        content="Appointment"
                        position="right center"
                        size="mini"
                        inverted
                        style={{
                            fontSize: 10,
                        }}
                    />
                </div>
                <Collapse
                    in={expanded}
                    timeout="auto"
                    unmountOnExit
                    style={{
                        backgroundColor: '#fff',
                    }}
                >
                    <CardContent>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <div className="expanded">
                                <div className="two_elements_centered">
                                    <div>Owner Name</div>
                                    <div>owner name</div>
                                </div>
                                <div
                                    className="two_elements_centered"
                                    style={{ border: 'none' }}
                                >
                                    <div>Location </div>
                                    <div>location</div>
                                </div>
                            </div>
                            <div
                                className="expanded"
                                style={{ marginTop: '1em' }}
                            >
                                <div className="two_elements_centered">
                                    <div>Pet Species</div>
                                    <div>owner name</div>
                                </div>
                                <div
                                    className="two_elements_centered"
                                    style={{ border: 'none' }}
                                >
                                    <div>Reason</div>
                                    <div>location</div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Collapse>
            </Card>
        </>
    )
}

UpdateClientAppointment.propTypes = {

}

export default UpdateClientAppointment
