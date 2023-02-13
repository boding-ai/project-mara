import React, { useState } from 'react'

import { makeStyles } from '@mui/styles'
import Scrollbars from 'react-custom-scrollbars'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'


import Maximized from '../../../min-max/Maximized'
import Standard from './pages/Standard'
import Search from '../../../search/AddRecordClientPetSearch'

import { Divider } from 'semantic-ui-react'
import { useTheme } from '@mui/material/styles'

import { Button, MobileStepper, Tooltip } from '@mui/material'

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import CircleIcon from '@mui/icons-material/Circle'

import AppDetails from './pages/AppDetails'

const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
        borderRadius: 5,
        backgroundColor: '#d3d3d3',
    }
    return <div style={{ ...style, ...thumbStyle }} {...props} />
}

const CustomScrollbars = (props) => (
    <Scrollbars
        renderThumbHorizontal={renderThumb}
        renderThumbVertical={renderThumb}
        {...props}
    />
)

const progressBarStyle = makeStyles({
    root: {
        '& .MuiLinearProgress-colorPrimary': {
            backgroundColor: '#ded9db',
        },
        '& .MuiLinearProgress-barColorPrimary': {
            backgroundColor: '#f7bf45',
        },
    },
})

const progressBarButtonStyle = makeStyles({
    root: {
        backgroundColor: '#000000',
        color: '#000000',
        '&:hover': {
            cursor: 'pointer',
            color: '#f7bf45',
        },
    },
})


const AddAppMax = ({
    // Functions
    onExpandLessClick,
    close,
    onChange,
    onClearAll,

    // Data
    element,
    index,
    showPetDetails,
    setShowPetDetails,
    isEnabled,
    setIsEnabled,
}) => {
    const { ownerName, ownerMobileNo } = element

    const [activeStep, setActiveStep] = useState(0)

    const theme = useTheme()

    const progressIconStyle = progressBarStyle()
    const progressButtonStyle = progressBarButtonStyle()

    // Errors
    const [ownerNameEmptyError, setOwnerNameEmptyError] = useState(false)
    const [ownerMobileEmptyError, setOwnerMobileEmptyError] = useState(false)

    const handleNext = async (e) => {
        e.preventDefault()
        if (ownerName.length < 1) {
            setOwnerNameEmptyError(true)
            setTimeout(() => setOwnerNameEmptyError(false), 3000)
        } else if (ownerMobileNo.length < 1) {
            setOwnerMobileEmptyError(true)
            setTimeout(() => setOwnerMobileEmptyError(false), 3000)
        } else {
            setActiveStep(activeStep + 1)
        }
    }

    const handleBack = async (e) => {
        e.preventDefault()
        setActiveStep(activeStep - 1)
    }

    return (
        <>
            <div className="add-card">
                <div
                    className="triple_grid"
                    style={{ marginBottom: '1em', padding: '1em 1em 0 1em' }}
                >
                    <div className="time flex_left">
                        <Tooltip title="Clear All" placement="bottom">
                            <div
                                onClick={onClearAll}
                                className="clear cursor_pointer"
                            >
                                <CircleIcon
                                    style={{ fontSize: 16, marginTop: '0.3em' }}
                                />
                            </div>
                        </Tooltip>
                    </div>
                    <div className="flex_middle title">
                        <FontAwesomeIcon
                            icon={faCalendarCheck}
                            style={{ color: '#f7bf45', fontSize: 16 }}
                        />
                        <div
                            style={{ marginLeft: '0.4em', marginTop: '0.1em' }}
                        >
                            APPOINTMENT
                        </div>
                    </div>
                    <Maximized
                        close={close}
                        minimize={onExpandLessClick}
                        dark={true}
                    />
                </div>
                <div className="main">
                    <CustomScrollbars
                        autoHide
                        autoHideTimeout={500}
                        autoHideDuration={200}
                    >
                        <div
                            style={{
                                padding: '0em 0.5em',
                            }}
                            className=""
                        >
                            {ownerNameEmptyError && (
                                <div
                                    style={{
                                        backgroundColor: 'red',
                                        color: 'white',
                                        width: '100%',
                                        fontSize: '0.85em',
                                        borderRadius: '5px',
                                        textAlign: 'center',
                                        marginTop: '0.5em',
                                        padding: '0.1em 0.5em',
                                    }}
                                >
                                    Owner name is required.
                                </div>
                            )}
                            {ownerMobileEmptyError && (
                                <div
                                    style={{
                                        backgroundColor: 'red',
                                        color: 'white',
                                        width: '100%',
                                        fontSize: '0.85em',
                                        borderRadius: '5px',
                                        textAlign: 'center',
                                        marginTop: '0.5em',
                                        padding: '0.1em 0.5em',
                                    }}
                                >
                                    Owner name is required.
                                </div>
                            )}
                            {(() => {
                                switch(activeStep) {
                                    case 0:
                                        return (
                                            <>
                                                <div className="flex_middle">
                                                    <div
                                                        style={{
                                                            width: '90%',
                                                            margin: '1.5em 0 1.5em 0',
                                                        }}
                                                        className=""
                                                    >
                                                        <Search
                                                            isFromAppointment={
                                                                true
                                                            }
                                                            index={index}
                                                        />
                                                    </div>
                                                </div>
                                                <Standard
                                                    // Data
                                                    index={index}
                                                    data={element}
                                                    setIsEnabled={setIsEnabled}
                                                    showPetDetails={
                                                        showPetDetails
                                                    }
                                                    setShowPetDetails={
                                                        setShowPetDetails
                                                    }
                                                    // Functions
                                                    onChange={onChange}
                                                    // Errors
                                                    ownerNameEmptyError={
                                                        ownerNameEmptyError
                                                    }
                                                    ownerMobileEmptyError={
                                                        ownerMobileEmptyError
                                                    }
                                                />
                                            </>
                                        )
                                    
                                    case 1:
                                        return (
                                            <>
                                                <AppDetails
                                                    // Data
                                                    element={element}
                                                />
                                            </>
                                        )
                                    
                                    default:
                                        return null

                                }
                            })()}
                        </div>
                    </CustomScrollbars>
                </div>
                <div className="add_record_divider">
                    <Divider
                        style={{
                            padding: 0,
                            margin: 0,
                        }}
                    />
                </div>
                <div className="add_record_progress_bar">
                    <MobileStepper
                        variant="progress"
                        steps={2}
                        activeStep={activeStep}
                        position="static"
                        className={progressIconStyle.root}
                        sx={{
                            maxWidth: '100%',
                            flexGrow: 1,
                            borderRadius: '0 0 10px 10px',
                        }}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={!isEnabled || activeStep === 1}
                                className={progressButtonStyle.root}
                            >
                                Next
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        }
                        backButton={
                            <Button
                                size="small"
                                onClick={handleBack}
                                disabled={activeStep === 0}
                                className={progressButtonStyle.root}
                            >
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                                Back
                            </Button>
                        }
                    />
                </div>
            </div>
        </>
    )
}

export default AddAppMax