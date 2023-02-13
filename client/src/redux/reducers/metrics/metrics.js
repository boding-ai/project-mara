import {
    // Number of Visitors
    NUMBER_OF_VISITORS_LOADING,
    NUMBER_OF_VISITORS_LOADING_COMPLETE,
    NUMBER_OF_VISITORS,

    // Number of Appointments
    NUMBER_OF_APPOINTMENTS_CHART_LOADING,
    NUMBER_OF_APPOINTMENTS_CHART_LOADING_COMPLETE,
    NUMBER_OF_APPOINTMENTS_CHART,

    // Type Of Visits
    TYPE_OF_VISIT_CHART_LOADING,
    TYPE_OF_VISIT_CHART_LOADING_COMPLETE,
    TYPE_OF_VISIT_CHART,

    // Total Revenue
    TOTAL_REVENUE_BLOCK_LOADING,
    TOTAL_REVENUE_BLOCK_LOADING_COMPLETE,
    TOTAL_REVENUE_BLOCK,
    TOTAL_REVENUE_BLOCK_TODAY,
} from '../../actions/types'
//
const initialState = {
    // Visitor Pie Chart
    numberOfVisitorsChartLoading: false,
    numberOfVisitorsChart: [],

    // Number Of Appointments
    numberOfAppointmentsChartLoading: false,
    numberOfAppointmentsChart: [],

    // Type of Visits
    typeOfVisitChartLoading: false,
    typeOfVisitChart: [],

    // Total Revenue
    totalRevenueBlockLoading: false,
    totalRevenueBlock: [],

    // Total Revenue - Specials 
    // Today
    totalRevenueBlockToday: 0,
}
// kk
function authReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        // Total Revenue
        case TOTAL_REVENUE_BLOCK_TODAY:
            return {
                ...state,
                totalRevenueBlockToday: payload,
            }

        case TOTAL_REVENUE_BLOCK:
            return {
                ...state,
                totalRevenueBlock: payload,
            }
        case TOTAL_REVENUE_BLOCK_LOADING:
            return {
                ...state,
                totalRevenueBlockLoading: true,
            }
        case TOTAL_REVENUE_BLOCK_LOADING_COMPLETE:
            return {
                ...state,
                totalRevenueBlockLoading: false,
            }

        // Type Of Visits
        case TYPE_OF_VISIT_CHART:
            return {
                ...state,
                typeOfVisitChart: payload,
            }
        case TYPE_OF_VISIT_CHART_LOADING:
            return {
                ...state,
                typeOfVisitChartLoading: true,
            }
        case TYPE_OF_VISIT_CHART_LOADING_COMPLETE:
            return {
                ...state,
                typeOfVisitChartLoading: false,
            }

        // Number of Appointments
        case NUMBER_OF_APPOINTMENTS_CHART:
            return {
                ...state,
                numberOfAppointmentsChart: payload,
            }
        case NUMBER_OF_APPOINTMENTS_CHART_LOADING:
            return {
                ...state,
                numberOfAppointmentsChartLoading: true,
            }
        case NUMBER_OF_APPOINTMENTS_CHART_LOADING_COMPLETE:
            return {
                ...state,
                numberOfAppointmentsChartLoading: false,
            }

        //   Visitors Array
        case NUMBER_OF_VISITORS:
            return {
                ...state,
                numberOfVisitorsChart: payload,
            }
        case NUMBER_OF_VISITORS_LOADING:
            return {
                ...state,
                numberOfVisitorsChartLoading: true,
            }
        case NUMBER_OF_VISITORS_LOADING_COMPLETE:
            return {
                ...state,
                numberOfVisitorsChartLoading: false,
            }
        default:
            return state
    }
}

export default authReducer
