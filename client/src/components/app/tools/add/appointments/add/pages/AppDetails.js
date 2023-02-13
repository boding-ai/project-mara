import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  changeValuesOfElementInArray
} from '../../../../../../../redux/actions/add-array/add'

const AppDetails = ({
    // Data
    element,

    // Redux Actions
    changeValuesOfElementInArray,
}) => {
    return <>App Details</>
}

AppDetails.propTypes = {
    changeValuesOfElementInArray: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({})

const mapStateToActions = {
    changeValuesOfElementInArray,
}

export default connect(mapStateToProps, mapStateToActions)(AppDetails)