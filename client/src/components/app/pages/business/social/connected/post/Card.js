import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'

import {
    Modal,
    Fade,
    Box,
    TextField,
    Button,
    MobileStepper,
    Tooltip,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { makeStyles } from '@mui/styles'

import Warning from '../../../../../tools/warnings/Warning'

import {
    makePostUnLive,
    makePostLive,
    updatePostCaption,
    enableNsfwWarning,
    disableNsfwWarning,
} from '../../../../../../../redux/actions/business/social'

const CssTextField = styled(TextField, {
    shouldForwardProp: (props) => props !== 'focusColor',
})((p) => ({
    // input label when focused
    '& label.Mui-focused': {
        color: 'none',
        border: 'none',
    },
    // focused color for input with variant='outlined'
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: 'none',
            fontSize: '0.9em',
        },
    },
    border: 'transparent',
}))

const useStyles = makeStyles(() => ({
    noBorder: {
        border: 'none',
    },
}))

const style = {
    position: 'fixed',
    top: '50%',
    left: '48%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 2,
    border: 'none',
    p: 4,
}

const Card = ({
    caption,
    timestamp,
    id,
    children,
    show,
    nsfwWarning,
    singleView,
    // Redux Actions
    makePostUnLive,
    makePostLive,
    updatePostCaption,
    enableNsfwWarning,
    disableNsfwWarning,
}) => {
    const textAttitude = useStyles()

    const [activeStep, setActiveStep] = useState(0)
    const [unliveWarning, setUnliveWarning] = useState(false)
    const [nsfwWarningOpen, setNsfwWarningOpen] = useState(false)
    const [nsfwEnableWarningOpen, setNsfwEnableWarningOpen] = useState(false)
    const [entireCaption, setEntireCaption] = useState(false)
    const [captionTextfield, setCaptionTextfield] = useState(false)
    const [showNsfwWarning, setShowNsfwWarning] = useState(false)
    const [captionMessage, setCaptionMessage] = useState('')

    useEffect(() => {
        setCaptionMessage(caption)
    }, [show])

    useEffect(() => {
      if(nsfwWarning) {
        setShowNsfwWarning(true)
      } else {
        setShowNsfwWarning(false)
      }
    }, [nsfwWarning])

    const removePost = () => {
        disableUnLiveWarning()
        makePostUnLive(id)
    }

    const putWarning = () => {
        setNsfwWarningOpen(false)
        if (nsfwEnableWarningOpen) {
          enableNsfwWarning(id)
          setNsfwEnableWarningOpen(false)
        } else {
          disableNsfwWarning(id)
          setNsfwEnableWarningOpen(false)
        }
    }

    const enableUnLiveWarning = () => {
        setUnliveWarning(true)
    }

    const disableUnLiveWarning = () => {
        setUnliveWarning(false)
    }

    const enableNsfwWarningModal = (value) => {
      if (value === 'enableToDisable') {
        setNsfwEnableWarningOpen(false)
        setNsfwWarningOpen(true)
      }
      if (value === 'disableToEnable') {
        setNsfwEnableWarningOpen(true)
        setNsfwWarningOpen(true)
      }
    }

    const disableNsfwWarningModal = () => {
        setNsfwWarningOpen(false)
        setNsfwEnableWarningOpen(false)
    }

    const onChange = (e) => {
        setCaptionMessage(e.target.value)
    }

    const decreaseActiveStep = () => {
        if (activeStep !== 0) {
            setActiveStep(activeStep - 1)
        }
    }

    const increaseActiveStep = () => {
        if (activeStep !== children.length - 1) {
            setActiveStep(activeStep + 1)
        }
    }

    return (
        <>
            <div className="instagram-post">
                <div className="images">
                    {showNsfwWarning ? (
                        <div className="nsfw_warning">
                            <div className="content flex_middle">
                                <div className="app">
                                    <VisibilityOffIcon
                                        style={{ color: 'white', fontSize: 40 }}
                                    />
                                    <div className="title">
                                        Sensitive Content
                                    </div>
                                    <div className="warning">
                                        This story contains images which some
                                        users may find disturbing.
                                    </div>
                                    <div
                                        className="show_anyway"
                                        onClick={() =>
                                            setShowNsfwWarning(false)
                                        }
                                    >
                                        Show Anyway
                                    </div>
                                </div>
                            </div>
                            <div className="images">
                                {children.length > 0 &&
                                    (children[0].media_type === 'VIDEO' ? (
                                        <video autoPlay muted>
                                            <source
                                                src={children[0].media_url}
                                                type="video/mp4"
                                            />
                                            <source
                                                src={children[0].media_url}
                                                type="video/ogg"
                                            />
                                            Your browser does not support the
                                            video tag.
                                        </video>
                                    ) : (
                                        <img
                                            src={children[0].media_url}
                                            alt="This is a Img"
                                        />
                                    ))}
                            </div>
                        </div>
                    ) : (
                        <>
                            {children.length === 1 && (
                                <div className="app">
                                    <div>
                                        {children.map((element, index) => (
                                            <div className="flex_middle">
                                                {element.media_type ===
                                                'VIDEO' ? (
                                                    <video
                                                        autoPlay
                                                        muted
                                                        key={index}
                                                    >
                                                        <source
                                                            src={
                                                                element.media_url
                                                            }
                                                            type="video/mp4"
                                                        />
                                                        <source
                                                            src={
                                                                element.media_url
                                                            }
                                                            type="video/ogg"
                                                        />
                                                        Your browser does not
                                                        support the video tag.
                                                    </video>
                                                ) : (
                                                    <img
                                                        src={element.media_url}
                                                        alt="This is an Img"
                                                        key={index}
                                                        style={{
                                                            borderRadius: '5px',
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <MobileStepper
                                        variant="dots"
                                        steps={1}
                                        position="static"
                                        activeStep={0}
                                        sx={{ maxWidth: 400, flexGrow: 1 }}
                                    />
                                </div>
                            )}
                            {children.length > 1 && (
                                <div className="app">
                                    {children[activeStep].media_type ===
                                    'VIDEO' ? (
                                        <video autoPlay muted>
                                            <source
                                                src={
                                                    children[activeStep]
                                                        .media_url
                                                }
                                                type="video/mp4"
                                            />
                                            <source
                                                src={
                                                    children[activeStep]
                                                        .media_url
                                                }
                                                type="video/ogg"
                                            />
                                            Your browser does not support the
                                            video tag.
                                        </video>
                                    ) : (
                                        <img
                                            src={children[activeStep].media_url}
                                            alt="This is an Img"
                                            style={{ borderRadius: '5px' }}
                                        />
                                    )}
                                    {activeStep !== 0 && (
                                        <div
                                            className="arrow-left"
                                            onClick={decreaseActiveStep}
                                        >
                                            <FontAwesomeIcon
                                                icon={faArrowCircleLeft}
                                                style={{ fontSize: 20 }}
                                            />
                                        </div>
                                    )}
                                    {activeStep !== children.length - 1 && (
                                        <div
                                            className="arrow-right"
                                            onClick={increaseActiveStep}
                                        >
                                            <FontAwesomeIcon
                                                icon={faArrowCircleRight}
                                                style={{ fontSize: 20 }}
                                            />
                                        </div>
                                    )}
                                    <MobileStepper
                                        variant="dots"
                                        steps={children.length}
                                        position="static"
                                        activeStep={activeStep}
                                        sx={{ maxWidth: 400, flexGrow: 1 }}
                                    />
                                </div>
                            )}
                        </>
                    )}
                </div>
                <div
                    className="triple_grid"
                    style={
                        singleView
                            ? { margin: '20px 20px 30px 20px' }
                            : { margin: '40px 20px 10px 20px' }
                    }
                >
                    <div className="status flex_middle">
                        {show ? (
                            <div className="live" onClick={enableUnLiveWarning}>
                                LIVE
                            </div>
                        ) : (
                            <div
                                className="unlive"
                                onClick={() => {
                                    makePostLive(id)
                                }}
                            >
                                NOT LIVE
                            </div>
                        )}
                    </div>
                    <div className="nsfw flex_middle">
                        {nsfwWarning ? (
                            <Tooltip title="NSFW Content Warning Active">
                                <div
                                    className="active"
                                    onClick={() =>
                                        enableNsfwWarningModal(
                                            'enableToDisable'
                                        )
                                    }
                                >
                                    NSFW
                                </div>
                            </Tooltip>
                        ) : (
                            <Tooltip title="NSFW Content Warning Inactive">
                                <div
                                    className="inactive"
                                    onClick={() =>
                                        enableNsfwWarningModal(
                                            'disableToEnable'
                                        )
                                    }
                                >
                                    NON-NSFW
                                </div>
                            </Tooltip>
                        )}
                    </div>
                    <div className="time flex_middle">
                        {moment(timestamp).fromNow()}
                    </div>
                </div>
                <div className="caption">
                    {captionTextfield ? (
                        <CssTextField
                            fullWidth
                            multiline
                            placeholder="Details"
                            inputProps={{
                                style: {
                                    fontSize: '0.85em',
                                },
                            }}
                            InputProps={{
                                classes: {
                                    notchedOutline: textAttitude.noBorder,
                                },
                            }}
                            style={{
                                border: 'none',
                            }}
                            name="captionMessage"
                            value={captionMessage}
                            onChange={onChange}
                            error={captionMessage.length < 1}
                        />
                    ) : (
                        <>
                            {captionMessage.length > 0 &&
                                (entireCaption
                                    ? captionMessage
                                    : captionMessage.length > 100
                                    ? captionMessage.slice(0, 100) + '......'
                                    : captionMessage)}
                            <span className="more cursor_pointer">
                                {entireCaption ? (
                                    <span
                                        onClick={() => setEntireCaption(false)}
                                        style={{ marginLeft: '0.5em' }}
                                    >
                                        ......less
                                    </span>
                                ) : (
                                    <span
                                        onClick={() => setEntireCaption(true)}
                                    >
                                        more
                                    </span>
                                )}
                            </span>
                            {entireCaption && (
                                <Tooltip title="Edit Caption" placement="right">
                                    <div
                                        className="flex_right"
                                        onClick={() =>
                                            setCaptionTextfield(true)
                                        }
                                    >
                                        <FontAwesomeIcon
                                            icon={faPen}
                                            className="cursor_pointer edit"
                                        />
                                    </div>
                                </Tooltip>
                            )}
                        </>
                    )}
                </div>
                {captionTextfield && (
                    <div
                        className="flex_evenly special-buttons"
                        style={{ marginBottom: '20px' }}
                    >
                        <div style={{ marginRight: '1.3em' }}>
                            <button
                                className="button-yes flex_middle"
                                onClick={() => {
                                    setCaptionTextfield(false)
                                    updatePostCaption(
                                        caption,
                                        id,
                                        captionMessage
                                    )
                                }}
                            >
                                <div className="flex_middle">
                                    <div>Save</div>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button
                                className="button-no"
                                onClick={() => {
                                    setCaptionTextfield(false)
                                    setCaptionMessage(caption)
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <Modal
                open={unliveWarning}
                onClose={disableUnLiveWarning}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                    style: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                    },
                }}
                disableScrollLock={true}
            >
                <Fade in={unliveWarning}>
                    <Box style={style}>
                        <Warning
                            close={disableUnLiveWarning}
                            primaryMessage={
                                'Are you sure you want to remove this story from your website?'
                            }
                            secondaryMessage={
                                "Visitors won't be able to see this story on your website."
                            }
                            type={'warning'}
                            action={removePost}
                        />
                    </Box>
                </Fade>
            </Modal>
            <Modal
                open={nsfwWarningOpen}
                onClose={disableNsfwWarningModal}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                    style: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                    },
                }}
                disableScrollLock={true}
            >
                <Fade in={nsfwWarningOpen}>
                    <Box style={style}>
                        <Warning
                            close={disableNsfwWarningModal}
                            primaryMessage={
                                nsfwEnableWarningOpen
                                    ? 'Are you sure you want to mark this story as NSFW Content?'
                                    : 'Are you sure you want to remove the NSFW content warning from this story?'
                            }
                            secondaryMessage={
                                nsfwEnableWarningOpen
                                    ? 'Visitors will have to see and accept a content warning before being able to view this story on your website.'
                                    : 'Visitors will no longer see a NSFW content warning when viewing this story.'
                            }
                            type={'warning'}
                            action={putWarning}
                        />
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

Card.propTypes = {
    makePostUnLive: PropTypes.func.isRequired,
    makePostLive: PropTypes.func.isRequired,
    updatePostCaption: PropTypes.func.isRequired,
    enableNsfwWarning: PropTypes.func.isRequired,
    disableNsfwWarning: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
})

const mapStateToActions = {
    makePostUnLive,
    makePostLive,
    updatePostCaption,
    enableNsfwWarning,
    disableNsfwWarning,
}

export default connect(mapStateToProps, mapStateToActions)(Card)