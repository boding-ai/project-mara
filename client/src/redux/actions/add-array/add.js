import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid'

import {
    // Errors
    ERROR_400,
    SNACKBAR_RESET,

    // Add Array
    ADD_MINIMIZE_TAB,
    CLOSE_ADD_MINIMIZE_TAB,

    // Cleat values of element
    CLEAR_VALUES_OF_ELEMENT_ADD,

    // Change values of element
    CHANGE_VALUES_OF_ELEMENT_ADD,

    // Change values of element if it is an array
    CHANGE_VALUES_ELEMENT_IF_ARRAY_ADD,
    ADD_ELEMENT_IF_ARRAY_PRESCRIPTION,
    DELETE_ELEMENT_IF_ARRAY_PRESCRIPTION,
    CHANGE_VALUES_OF_ELEMENT_WITH_ARRAY_PRESCRIPTION,

    // Change values of element if it is Add Product
    ADD_ELEMENT_IF_ARRAY_PRODUCT,
    DELETE_ELEMENT_IF_ARRAY_PRODUCT,
} from '../types'

export const deleteElementInProductArray =
    (index, type, elementIndex) => async (dispatch) => {
        if (type === 'product') {
            dispatch({
                type: DELETE_ELEMENT_IF_ARRAY_PRODUCT,
                payload: {
                    index,
                    index_element: elementIndex,
                },
            })
        }
    }

export const deleteRow = (type, index, elementIndex) => async (dispatch) => {
    if (type === 'prescription') {
        dispatch({
            type: DELETE_ELEMENT_IF_ARRAY_PRESCRIPTION,
            payload: {
                index,
                index_element: elementIndex,
            },
        })
    }
}

export const addNewRow = (type, index) => async (dispatch) => {
    let values = {}

    if (type === 'prescription') {
        values = {
            medication: '',
            dosage: '',
            dose: '',
            route: '',
            duration: '',
            day: '',
        }

        dispatch({
            type: ADD_ELEMENT_IF_ARRAY_PRESCRIPTION,
            payload: {
                value: values,
                index,
            },
        })
    }
}

export const changeValuesOfElementInArray =
    (index, name, value) => async (dispatch) => {
        dispatch({
            type: CHANGE_VALUES_OF_ELEMENT_ADD,
            payload: {
                index,
                name,
                value,
            },
        })
    }

export const changeValuesOfElementWithArrayInArray =
    (index, elementIndex, name, value, type) => async (dispatch) => {
        if (type === 'prescription') {
            dispatch({
                type: CHANGE_VALUES_OF_ELEMENT_WITH_ARRAY_PRESCRIPTION,
                payload: {
                    index,
                    name,
                    value,
                    index_element: elementIndex,
                },
            })
        }
    }

// Clear all values in a given element in the array
export const clearElementInArray = (id, type, index) => async (dispatch) => {
    let newValues = {}

    if (type === 'pet') {
        newValues = {
            id,
            payloadType: 'addOwner',
            ownerName: '',
            ownerEmail: '',
            ownerMobileNo: '',
            ownerAddress: '',
            petName: '',
            petSpecies: '',
            petBreed: '',
            petAge: '',
            petPhysicalFeatures: [],
            petPhysicalFeaturesInput: '',
            petStatus: 'withOwner',
            petAgeTime: '',
            petSpeciesDetails: '',
            petSpeciesDetailsState: false,
            isNewOwner: false,
            changeValues: false,
            showSearchValues: false,
            showAddNewOwner: false,
            isPetPhysicalFeaturesActive: false,
            isSelected: false,
            speciesOther: false,
            input: '',
        }
    }

    if (type === 'owner') {
        newValues = {
            id,
            payloadType: 'addOwner',
            ownerName: '',
            ownerMobileNo: '',
            ownerAddress: '',
            ownerEmail: '',
        }
    }

    if (type === 'product') {
        let uniqueId = uuidv4()
        newValues = {
            id,
            payloadType: 'addProduct',
            products: [
                {
                    id: uniqueId,
                    productName: '',
                    gst: '',
                    hsnCode: '',
                    category: '',
                    reduceBy: '',
                },
            ],
            variation: [
                {
                    id: uniqueId,
                    unitQuantity: 0,
                    unitType: '',
                    barcode: '',
                    batch: [
                        {
                            stock: 0,
                            productBatch: '',
                            productExpirationDate: '',
                            costPerUnit: 0,
                            singleQuantity: 0,
                            rack: '',
                            shelf: '',
                        },
                    ],
                },
            ],
        }
    }

    if (type === 'store') {
        newValues = {
            id,
            payloadType: 'addStore',
            storeName: '',
            storeType: '',
            storeContactNumber: '',
            address: '',
            mainLocation: '',
            poc: '',
            storeTimingStart: '',
            storeTimingEnd: '',
            storeOperationDays: [
                {
                    day: 0,
                    value: true,
                },
                {
                    day: 1,
                    value: true,
                },
                {
                    day: 2,
                    value: true,
                },
                {
                    day: 3,
                    value: true,
                },
                {
                    day: 4,
                    value: true,
                },
                {
                    day: 5,
                    value: true,
                },
                {
                    day: 6,
                    value: true,
                },
            ],
            appointmentStartTimings: '',
            appointmentEndTimings: '',
            appointmentTimeSpan: '',
            appointmentTimeDuration: '',
        }
    }

    if (type === 'appointment') {
        newValues = {
            id,
            payloadType: 'addAppointment',
            ownerName: '',
            ownerMobileNo: '',
            ownerEmailId: '',
            ownerId: 0,
            petId: 0,
            petName: '',
            petSpecies: '',
            petBreed: '',
            petGender: '',
            problem: '',
        }
    }

    if (type === 'prescription') {
        newValues = {
            id,
            petBodyWeight: '',
            payloadType: 'addPrescription',
            details: [],
        }
    }

    if (type === 'exam') {
        newValues = {
            id,
            payloadType: 'addExam',
            shortSummary: '',
            bcs: 0,
            gait: [],
            gaitInput: '',
            externalAbnormalities: [],
            externalAbnormalitiesInput: '',
            heentInput: '',
            overallHEENT: [],
            git: [],
            gitInput: '',
            mouth: [],
            mouthInput: '',
            respiratorySystem: [],
            respiratorySystemInput: '',
            uninary: [],
            uninaryInput: '',
            genitalSystem: [],
            genitalSystemInput: '',
            neurological: [],
            neurologicalInput: '',
            integumentarySystem: [],
            integumentarySystemInput: '',
            musculoSkeletal: [],
            musculoSkeletalInput: '',
            behavior: [],
            behaviorInput: '',
            auscultation: [],
            auscultationInput: '',
            images: [],
        }
    }

    dispatch({
        type: CLEAR_VALUES_OF_ELEMENT_ADD,
        payload: {
            values: newValues,
            index,
        },
    })
}

// Add to minimize tabs array
export const addMainArray = (id, type, time) => async (dispatch, getState) => {

    const { add } = getState()

    const { addArrayMinimizeTabs } = add

    if(addArrayMinimizeTabs.length === 4){
        let value = {}

         value.message = 'Cannot open more than 4 tabs at once!'
         value.type = 'error'

         dispatch({
             type: ERROR_400,
             payload: value,
         })

         setTimeout(
             () =>
                 dispatch({
                     type: SNACKBAR_RESET,
                 }),
             3000
         )
    } else {
        if (type === 'addStore') {
            dispatch({
                type: ADD_MINIMIZE_TAB,
                payload: {
                    id,
                    payloadType: 'addStore',
                    storeName: '',
                    storeType: '',
                    storeContactNumber: '',
                    address: '',
                    mainLocation: '',
                    poc: '',
                    storeTimingStart: '',
                    storeTimingEnd: '',
                    storeOperationDays: [
                        {
                            day: 0,
                            value: true,
                        },
                        {
                            day: 1,
                            value: true,
                        },
                        {
                            day: 2,
                            value: true,
                        },
                        {
                            day: 3,
                            value: true,
                        },
                        {
                            day: 4,
                            value: true,
                        },
                        {
                            day: 5,
                            value: true,
                        },
                        {
                            day: 6,
                            value: true,
                        },
                    ],
                    appointmentStartTimings: '',
                    appointmentEndTimings: '',
                    appointmentTimeSpan: '',
                    appointmentTimeDuration: '',
                },
            })
        } else if (type === 'addAppointment') {
            dispatch({
                type: ADD_MINIMIZE_TAB,
                payload: {
                    id,
                    payloadType: 'addAppointment',
                    ownerName: '',
                    ownerMobileNo: '',
                    ownerEmailId: '',
                    ownerId: 0,
                    petId: 0,
                    petName: '',
                    petSpecies: '',
                    petBreed: '',
                    petGender: '',
                    problem: '',
                },
            })
        } else if (type === 'addPrescription') {
            dispatch({
                type: ADD_MINIMIZE_TAB,
                payload: {
                    id,
                    petBodyWeight: '',
                    payloadType: 'addPrescription',
                    timeStamp: time,
                    details: [],
                },
            })
        } else if (type === 'addOwner') {
            dispatch({
                type: ADD_MINIMIZE_TAB,
                payload: {
                    id,
                    payloadType: 'addOwner',
                    ownerName: '',
                    ownerMobileNo: '',
                    ownerAddress: '',
                    ownerEmail: '',
                },
            })
        } else if (type === 'addPet') {
            dispatch({
                type: ADD_MINIMIZE_TAB,
                payload: {
                    id,
                    payloadType: 'addPet',
                    ownerName: '',
                    ownerEmail: '',
                    ownerMobileNo: '',
                    ownerAddress: '',
                    petName: '',
                    petSpecies: '',
                    petBreed: '',
                    petAge: '',
                    petPhysicalFeatures: [],
                    petPhysicalFeaturesInput: '',
                    petStatus: 'withOwner',
                    petAgeTime: '',
                    petSpeciesDetails: '',
                    petSpeciesDetailsState: false,
                    isNewOwner: false,
                    changeValues: false,
                    showSearchValues: false,
                    showAddNewOwner: false,
                    isPetPhysicalFeaturesActive: false,
                    isSelected: false,
                    speciesOther: false,
                    input: '',
                },
            })
        } else if (type === 'addExam') {
            dispatch({
                type: ADD_MINIMIZE_TAB,
                payload: {
                    id,
                    payloadType: 'addExam',
                    shortSummary: '',
                    bcs: 0,
                    gait: [],
                    gaitInput: '',
                    externalAbnormalities: [],
                    externalAbnormalitiesInput: '',
                    heentInput: '',
                    overallHEENT: [],
                    git: [],
                    gitInput: '',
                    mouth: [],
                    mouthInput: '',
                    respiratorySystem: [],
                    respiratorySystemInput: '',
                    uninary: [],
                    uninaryInput: '',
                    genitalSystem: [],
                    genitalSystemInput: '',
                    neurological: [],
                    neurologicalInput: '',
                    integumentarySystem: [],
                    integumentarySystemInput: '',
                    musculoSkeletal: [],
                    musculoSkeletalInput: '',
                    behavior: [],
                    behaviorInput: '',
                    auscultation: [],
                    auscultationInput: '',
                    images: [],
                },
            })
        } else if (type === 'addProduct') {
            if (
                !addArrayMinimizeTabs.some(
                    (element, index) => element.payloadType === 'addProduct'
                )
            ) {
                let uniqueId = uuidv4()
                dispatch({
                    type: ADD_MINIMIZE_TAB,
                    payload: {
                        id,
                        payloadType: 'addProduct',
                        products: [
                            {
                                id: uniqueId,
                                productName: '',
                                gst: '',
                                hsnCode: '',
                                category: '',
                                reduceBy: '',
                            },
                        ],
                        variation: [
                            {
                                id: uniqueId,
                                unitQuantity: 0,
                                unitType: '',
                                barcode: '',
                                batch: [
                                    {
                                        stock: 0,
                                        productBatch: '',
                                        productExpirationDate: '',
                                        costPerUnit: 0,
                                        singleQuantity: 0,
                                        rack: '',
                                        shelf: '',
                                    },
                                ],
                            },
                        ],
                    },
                })
            } else {
                let productsIndex = _.findIndex(addArrayMinimizeTabs, {
                    payloadType: 'addProduct',
                })

                let uniqueId = uuidv4()
                dispatch({
                    type: ADD_ELEMENT_IF_ARRAY_PRODUCT,
                    payload: {
                        index: productsIndex,
                        product: {
                            id: uniqueId,
                            productName: '',
                            gst: '',
                            hsnCode: '',
                            category: '',
                            reduceBy: '',
                        },
                        variation: {
                            id: uniqueId,
                            unitQuantity: 0,
                            unitType: '',
                            barcode: '',
                            batch: [
                                {
                                    stock: 0,
                                    productBatch: '',
                                    productExpirationDate: '',
                                    costPerUnit: 0,
                                    singleQuantity: 0,
                                    rack: '',
                                    shelf: '',
                                },
                            ],
                        },
                    },
                })
            }
        } else {
            dispatch({
                type: ADD_MINIMIZE_TAB,
                payload: type,
            })
        }
    }
}

// Remove from tabs array
export const closeAddMainArray = (value) => (dispatch) => {
    dispatch({
        type: CLOSE_ADD_MINIMIZE_TAB,
        payload: value,
    })
}
