import { Tooltip } from '@mui/material'
import React from 'react'

const TypeRectangle = ({ input, value }) => {

    return (
        <>
            {(() => {
                switch (input) {
                    case 'sale':
                        return (
                            <Tooltip title="Sale" placement="top">
                                <div
                                    className={`type_rectangle_recent_${input}`}
                                >
                                    <div>
                                        <div>{input.toUpperCase()}</div>
                                    </div>
                                </div>
                            </Tooltip>
                        )

                    case 'purchase':
                        return (
                              <Tooltip title='Purchase' placement='top' >
                                <div
                                    className={`type_rectangle_recent_${input}`}
                                >
                                    <div>
                                        <div>{input.toUpperCase()}</div>
                                    </div>
                                </div>
                            </Tooltip>
                     
                        )

                    case 'appointment':
                        return (
                              <Tooltip title='Appointment' placement='top' >
                                <div
                                    className={`type_rectangle_recent_${input}`}
                                >
                                    <div>
                                        <div>{input.toUpperCase()}</div>
                                    </div>
                                </div>
                            </Tooltip>
                         
                        )

                    case 'report':
                        return (
                              <Tooltip title='Report' placement='top' >
                                   <div className={`type_rectangle_recent_${input}`}>
                                <div>
                                    <div>R</div>
                                </div>
                            </div>
                            </Tooltip>
                         
                        )

                    case 'record':
                        return (
                              <Tooltip title='Record' placement='top' >
                                                            <div className={`type_rectangle_recent_${input}`}>
                                <div>
                                    <div>REC</div>
                                </div>
                            </div>
                            </Tooltip>

                        )

                    case 'ownerPatient':
                        return (
                            <div className={`type_rectangle_recent_${input}`}>
                                <div>
                                    <div>{value.toUpperCase()}</div>
                                </div>
                            </div>
                        )

                    case 'old':
                        return (
                            <div
                                className={`type_rectangle_recent_${input}`}
                            ></div>
                        )

                    default:
                        return null
                }
            })()}
        </>
    )
}

TypeRectangle.propTypes = {}

export default TypeRectangle
