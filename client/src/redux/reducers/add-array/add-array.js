import {
    ADD_MINIMIZE_TAB,
    CLOSE_ADD_MINIMIZE_TAB,
    CLEAR_VALUES_OF_ELEMENT_ADD,
    CHANGE_VALUES_OF_ELEMENT_ADD,

    // Change values of element if it is an array
    CHANGE_VALUES_ELEMENT_IF_ARRAY_ADD,
    ADD_ELEMENT_IF_ARRAY_PRESCRIPTION,
    DELETE_ELEMENT_IF_ARRAY_PRESCRIPTION,
    CHANGE_VALUES_OF_ELEMENT_WITH_ARRAY_PRESCRIPTION,

    // Change values of element if it is Add Product
    ADD_ELEMENT_IF_ARRAY_PRODUCT,
    DELETE_ELEMENT_IF_ARRAY_PRODUCT,
} from '../../actions/types'

const initialState = {
    addArrayMinimizeTabs: [],
}

function authReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        // Delete element in array - prescription
        case DELETE_ELEMENT_IF_ARRAY_PRESCRIPTION:
            return {
                ...state,
                addArrayMinimizeTabs: state.addArrayMinimizeTabs.map(
                    (element, index) =>
                        payload.index === index
                            ? {
                                  ...element,
                                  details: element.details.filter(
                                      (ele, index) =>
                                          index !== payload.index_element
                                  ),
                              }
                            : element
                ),
            }

        // Add empty element in array - prescription
        case ADD_ELEMENT_IF_ARRAY_PRESCRIPTION:
            return {
                ...state,
                addArrayMinimizeTabs: state.addArrayMinimizeTabs.map(
                    (element, index) =>
                        payload.index === index
                            ? {
                                  ...element,
                                  details: [...element.details, payload.value],
                              }
                            : element
                ),
            }

        // Change values of element with array in array - prescription
        case CHANGE_VALUES_OF_ELEMENT_WITH_ARRAY_PRESCRIPTION:
            return {
                ...state,
                addArrayMinimizeTabs: state.addArrayMinimizeTabs.map(
                    (element, index) =>
                        payload.index === index
                            ? {
                                  ...element,
                                  details: element.details.map((value, index) =>
                                      payload.index_element === index
                                          ? {
                                                [payload.name]: payload.value,
                                            }
                                          : value
                                  ),
                              }
                            : element
                ),
            }

        // Add empty element in array for Add Product
        case ADD_ELEMENT_IF_ARRAY_PRODUCT:
            return {
                ...state,
                addArrayMinimizeTabs: state.addArrayMinimizeTabs.map(
                    (element, index) =>
                        payload.index === index
                            ? {
                                  ...element,
                                  products: [
                                      ...element.products,
                                      payload.product,
                                  ],
                                  variation: [
                                      ...element.variation,
                                      payload.variation,
                                  ],
                              }
                            : element
                ),
            }

        // Delete element in array - product
        case DELETE_ELEMENT_IF_ARRAY_PRODUCT:
            return {
                ...state,
                addArrayMinimizeTabs: state.addArrayMinimizeTabs.map(
                    (element, index) =>
                        payload.index === index
                            ? {
                                  ...element,
                                  products: element.products.filter(
                                      (value, index) =>
                                          value.id !== payload.index_element
                                  ),
                                  variation: element.variation.filter(
                                      (value, index) =>
                                          value.id !== payload.index_element
                                  ),
                              }
                            : element
                ),
            }

        // Change values of element in array
        case CHANGE_VALUES_OF_ELEMENT_ADD:
            return {
                ...state,
                addArrayMinimizeTabs: state.addArrayMinimizeTabs.map(
                    (element, index) =>
                        payload.index === index
                            ? {
                                  ...element,
                                  [payload.name]: payload.value,
                              }
                            : element
                ),
            }

        // Clear all values in a given element in the array
        case CLEAR_VALUES_OF_ELEMENT_ADD:
            return {
                ...state,
                addArrayMinimizeTabs: state.addArrayMinimizeTabs.map(
                    (element, index) =>
                        payload.index === index
                            ? (element = payload.values)
                            : element
                ),
            }
        // Array for minimization on dashboard page
        case ADD_MINIMIZE_TAB:
            return {
                ...state,
                addArrayMinimizeTabs: [...state.addArrayMinimizeTabs, payload],
            }

        case CLOSE_ADD_MINIMIZE_TAB:
            return {
                ...state,
                addArrayMinimizeTabs: state.addArrayMinimizeTabs.filter(
                    (ele, index) => index !== payload
                ),
            }

        default:
            return state
    }
}

export default authReducer
