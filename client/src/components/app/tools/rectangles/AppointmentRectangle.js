import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Popup } from 'semantic-ui-react'

import EditMenuRect from './EditMenuRect'
import StatusRectangle from '../peripherals/StatusRectangle'
import TypeRectangle from '../peripherals/TypeRectangle'

import {
    Button,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Collapse,
    IconButton,
    Typography,
    Tooltip,
} from '@mui/material'

import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ModeEditIcon from '@mui/icons-material/ModeEdit'

import { styled } from '@mui/material/styles'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

const AppointmentRectangle = ({ complete }) => {
    const [expanded, setExpanded] = useState(false)
        const [completion, setCompletion] = useState(false)


    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

     useEffect(() => {
         if (complete) {
             setCompletion(false)
         } else {
             setCompletion(true)
         }
     }, [])

    return (
        <>
            <div className="rectangle">
                <Card
                    style={
                        completion
                            ? {
                                  borderRadius: '10px',
                                  border: '1px solid rgb(220, 220, 35)',
                              }
                            : {
                                  borderRadius: '10px',
                                  border: '2px solid #abaaa9',
                              }
                    }
                >
                    <div className="first_row">
                        <Tooltip title="Owner Name" placement="top">
                            <div className="element">OwnerName</div>
                        </Tooltip>
                        <Tooltip title="Pet Name" placement="top">
                            <div className="element">petName</div>
                        </Tooltip>
                        <Tooltip title="Species" placement="top">
                            <div className="element">Species</div>
                        </Tooltip>
                        <Tooltip title="Appointment Number" placement="top">
                            <div className="element">19981</div>
                        </Tooltip>
                        <div style={{ marginTop: '0.15em' }}>
                            <StatusRectangle input={'unresolved'} />
                        </div>
                        <div>
                            <EditMenuRect />
                        </div>
                    </div>
                    <div
                        className="flex_evenly"
                        style={{ margin: '1em 0em 0em 0em' }}
                    >
                        <Tooltip title="Appointment Date" placement="top">
                            <div className="element">29/11/2021 Tuesday</div>
                        </Tooltip>
                        <Tooltip title="Appointment Time" placement="top">
                            <div className="element">5:00 pm</div>
                        </Tooltip>
                        <Tooltip title="Attending Doctor" placement="top">
                            <div className="element">
                                Dr Shvesh Bandivadekar
                            </div>
                        </Tooltip>
                        <Tooltip title="Location" placement="top">
                            <div className="element">Rambaug Colony</div>
                        </Tooltip>
                    </div>
                    <div className="second_row flex_evenly">
                        <div>
                            <TypeRectangle input={'appointment'} />
                        </div>
                        <div className="inner">Date</div>
                        <div className="inner">Time</div>
                        <div className="inner">
                            <Popup
                                trigger={
                                    <IconButton
                                        aria-label="share"
                                        style={{
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <ShareIcon
                                            style={{
                                                fontSize: 15,
                                            }}
                                        />
                                    </IconButton>
                                }
                                inverted
                                content="Share Record"
                                size="mini"
                                position="top center"
                            />
                        </div>
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
                                    size="tiny"
                                    position="top center"
                                />
                            </ExpandMore>
                        </div>
                    </div>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <div className="center_everything">
                                <div className="title">Appointment Details</div>
                                <div>
                                    <Popup
                                        trigger={
                                            <IconButton
                                                aria-label="share"
                                                style={{
                                                    cursor: 'pointer',
                                                    paddingLeft: '5px',
                                                    background: 'transparent',
                                                }}
                                            >
                                                <ModeEditIcon
                                                    style={{
                                                        fontSize: 15,
                                                    }}
                                                />
                                            </IconButton>
                                        }
                                        basic
                                        inverted
                                        content="Edit"
                                        style={{
                                            fontSize: 10,
                                        }}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        </>
    )
}

AppointmentRectangle.propTypes = {}

export default AppointmentRectangle
