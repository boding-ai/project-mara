// https://webdesign.tutsplus.com/articles/build-an-html-email-template-from-scratch--webdesign-12770
import {
    // Snackbar
    REGISTER_FAIL,
    REGISTER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    MAIN_LOADING,
    LOGOUT,
    
    LOGIN_LOADING,
    LOGIN_LOADING_COMPLETE,
    LOGIN_LOADING_ERROR_RESOLVED,
    LOGIN_LOADING_ERROR,
} from '../../actions/types'

import {
    
    // Change name
    SETTINGS_USER_CHANGE_NAME,

    // Change email
    SETTINGS_USER_CHANGE_EMAIL,

    // Change city
    SETTINGS_USER_CHANGE_CITY,

    // Change state
    SETTINGS_USER_CHANGE_STATE,

    // Change Country
    SETTINGS_USER_CHANGE_COUNTRY,

    // Change Pincode
    SETTINGS_USER_CHANGE_PINCODE,

    // Change Mobile Number
    SETTINGS_USER_CHANGE_MOBILE_NUMBER,

    // Change Date of Birth
    SETTINGS_USER_CHANGE_DATE_OF_BIRTH,

    // Change Address
    SETTINGS_USER_CHANGE_ADDRESS,

    // Change Business Email id settings
    SETTINGS_BUSINESS_CHANGE_EMAIL,

    // Change Business name settings
    SETTINGS_BUSINESS_CHANGE_NAME,

    // Change business shipping address
    SETTINGS_BUSINESS_CHANGE_SHIPPING_ADDRESS,

    // Change business billing address
    SETTINGS_BUSINESS_CHANGE_BILLING_ADDRESS,

    // Change business contact no
    SETTINGS_BUSINESS_CHANGE_CONTACT_NUMBER,

    // Change business contact no
    SETTINGS_BUSINESS_CHANGE_PROFILE_PICTURE,

    // Change api key
    SETTINGS_PARTNER_WEBSITE_CHANGE_API_KEY,

    // Delete API Key
    SETTINGS_PARTNER_WEBSITE_DELETE_API_KEY,

    // Change domain url
    SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_URL,

    // Change domain verification settings
    SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION,
    SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION_LOADING,
} from '../../actions/settings/settings-types'

const initialState = {
    isAuthenticated: null,
    loading: true,
    registerLoading: false,
    user: null,
    loginLoading: false,
    loginError: false,
    domainVerificationLoading: false
}
// kk 
function authReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
      // Main Loading
      case MAIN_LOADING:
          return {
              ...state,
              loading: payload,
          }
      //   Change Domain Verification settings loading
      case SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION_LOADING:
          return {
              ...state,
              domainVerificationLoading: payload,
          }

      //   Change Domain Verification settings
      case SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION:
          return {
              ...state,
              user: {
                  ...state.user,
                  domainVerified: payload,
              },
          }

      //   Change Api key
      case SETTINGS_PARTNER_WEBSITE_CHANGE_API_KEY:
      case SETTINGS_PARTNER_WEBSITE_DELETE_API_KEY:
          return {
              ...state,
              user: {
                  ...state.user,
                  apiKey: payload,
              },
          }

      //   Change Business business contact number
      case SETTINGS_BUSINESS_CHANGE_CONTACT_NUMBER:
          return {
              ...state,
              user: {
                  ...state.user,
                  businessContactNo: payload,
              },
          }

      //   Change Business profile pic
      case SETTINGS_BUSINESS_CHANGE_PROFILE_PICTURE:
          return {
              ...state,
              user: {
                  ...state.user,
                  businessProfilePic: payload,
              },
          }

      //   Change Business billing address settings
      case SETTINGS_BUSINESS_CHANGE_BILLING_ADDRESS:
          return {
              ...state,
              user: {
                  ...state.user,
                  businessBillingAddress: payload,
              },
          }

      //   Change Business shipping address settings
      case SETTINGS_BUSINESS_CHANGE_SHIPPING_ADDRESS:
          return {
              ...state,
              user: {
                  ...state.user,
                  businessShippingAddress: payload,
              },
          }

      //   Change Business email Id settings
      case SETTINGS_BUSINESS_CHANGE_EMAIL:
          return {
              ...state,
              user: {
                  ...state.user,
                  businessEmailId: payload,
              },
          }
      //   Change Business name settings
      case SETTINGS_BUSINESS_CHANGE_NAME:
          return {
              ...state,
              user: {
                  ...state.user,
                  businessName: payload,
              },
          }

      //   Change Address settings
      case SETTINGS_USER_CHANGE_ADDRESS:
          return {
              ...state,
              user: {
                  ...state.user,
                  address: payload,
              },
          }

      //   Change mobile number settings
      case SETTINGS_USER_CHANGE_MOBILE_NUMBER:
          return {
              ...state,
              user: {
                  ...state.user,
                  mobileNo: payload,
              },
          }

      //   Change domain url settings
      case SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_URL:
          return {
              ...state,
              user: {
                  ...state.user,
                  domain: payload,
              },
          }

      //   Change date of birth settings
      case SETTINGS_USER_CHANGE_DATE_OF_BIRTH:
          return {
              ...state,
              user: {
                  ...state.user,
                  dateOfBirth: payload,
              },
          }
      //   Change pin code settings
      case SETTINGS_USER_CHANGE_PINCODE:
          return {
              ...state,
              user: {
                  ...state.user,
                  pinCode: payload,
              },
          }

      //   Change country settings
      case SETTINGS_USER_CHANGE_COUNTRY:
          return {
              ...state,
              user: {
                  ...state.user,
                  country: payload,
              },
          }

      //   Change city settings
      case SETTINGS_USER_CHANGE_CITY:
          return {
              ...state,
              user: {
                  ...state.user,
                  city: payload,
              },
          }

      //   Change state settings
      case SETTINGS_USER_CHANGE_STATE:
          return {
              ...state,
              user: {
                  ...state.user,
                  state: payload,
              },
          }

      //   Change name settings
      case SETTINGS_USER_CHANGE_NAME:
          return {
              ...state,
              user: {
                  ...state.user,
                  name: payload,
              },
          }

      //   Change email settings
      case SETTINGS_USER_CHANGE_EMAIL:
          return {
              ...state,
              user: {
                  ...state.user,
                  email: payload,
              },
          }

      case LOGIN_LOADING:
          return {
              ...state,
              loginLoading: true,
          }
      case LOGIN_LOADING_COMPLETE:
          return {
              ...state,
              loginLoading: false,
          }
      case LOGIN_LOADING_ERROR:
          return {
              ...state,
              loginError: true,
          }
      case LOGIN_LOADING_ERROR_RESOLVED:
          return {
              ...state,
              loginError: false,
          }
      case USER_LOADED:
          return {
              ...state,
              isAuthenticated: true,
              loading: false,
              user: payload,
          }

      case REGISTER_LOADING:
          return {
              ...state,
              registerLoading: payload,
          }

      case LOGIN_SUCCESS:
          return {
              ...state,
              ...payload,
              isAuthenticated: true,
              loading: false,
              user: payload,
          }
      case REGISTER_FAIL:
      case LOGIN_FAIL:
      case AUTH_ERROR:
      case LOGOUT:
          return {
              ...state,
              token: null,
              isAuthenticated: false,
              loading: false,
              user: null,
              business: null,
          }
      default:
          return state
  }
}

export default authReducer
