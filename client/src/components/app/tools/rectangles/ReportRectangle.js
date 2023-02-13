import React, { useState } from 'react'
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
} from '@mui/material'

import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AssignmentIcon from '@mui/icons-material/Assignment'
import ModeEditIcon from '@mui/icons-material/ModeEdit'

import { styled } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

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

const ReportRectangle = (props) => {
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <>
            <div className="rectangle">
                <Card
                    style={{
                        borderRadius: '10px',
                        border: '2px solid rgb(86, 234, 250)',
                    }}
                >
                    <div
                        className="first_row"
                        style={{
                            gridTemplateColumns:
                                '1.5fr 1.5fr 1fr 1fr 0.75fr 0.5fr 0.25fr',
                        }}
                    >
                        <div>
                            <span>Owner:</span> OwnerName
                        </div>
                        <div>
                            <span>Pet:</span> PetName
                        </div>
                        <div>
                            <span>Species:</span> Species
                        </div>
                        <div>
                            <span>App#</span> 11981
                        </div>
                        <div>
                            <TypeRectangle input={'report'} />
                        </div>
                        <div>
                            <StatusRectangle input={'active'} />
                        </div>
                        <div>
                            <EditMenuRect />
                        </div>
                    </div>
                    <div
                        className="flex_start_everything"
                        style={{ margin: '1em 0em 0em 2.5em' }}
                    >
                        <div>
                            <span>Type:</span> HVAC
                        </div>
                        <div style={{ paddingLeft: '2em' }}>
                            <span>Dr: </span> Aunsh SB
                        </div>
                        <div style={{ paddingLeft: '2em' }}>
                            <span>Location: </span> Rambaug Col
                        </div>
                    </div>
                    <div className="second_row">
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
                                <div className="title">Report Details</div>
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

ReportRectangle.propTypes = {}

export default ReportRectangle
