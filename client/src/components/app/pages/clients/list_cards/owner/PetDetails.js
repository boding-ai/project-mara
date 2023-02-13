import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowRight
} from '@fortawesome/free-solid-svg-icons'

const PetDetails = ({ details }) => {

  useEffect(() => {
    console.log(details)
  }, [])
  
  return (
      <div className="">
          <div className="pet_details">
              <div className="flex_left title">#</div>
              <div className="flex_left title">Pet Name</div>
              <div className="flex_left title">Species</div>
              <div className="flex_left title">Breed</div>
              <div className="flex_left title">Approx. Age</div>
              <div className="flex_middle title">Profile</div>
          </div>
          {details.map((element, index) => (
              <div className="pet_details">
                  <div className="flex_left">
                    {index+1}
                  </div>
                  <div className="flex_left">
                      {element.pet_name.replace(
                          /(^\w{1})|(\s+\w{1})/g,
                          (letter) => letter.toUpperCase()
                      )}
                  </div>
                  <div className="flex_left">
                      {element.pet_species.replace(
                          /(^\w{1})|(\s+\w{1})/g,
                          (letter) => letter.toUpperCase()
                      )}
                  </div>
                  <div className="flex_left">
                      {element.pet_breed.replace(
                          /(^\w{1})|(\s+\w{1})/g,
                          (letter) => letter.toUpperCase()
                      )}
                  </div>
                  <div className="flex_left" >
                      {moment([
                          moment(new Date()).year(),
                          moment(new Date()).month(),
                          moment(new Date()).day(),
                      ])
                          .diff(
                              moment([
                                  element.pet_estimated_birth_date.split(
                                      '/'
                                  )[2],
                                  element.pet_estimated_birth_date.split(
                                      '/'
                                  )[1],
                                  element.pet_estimated_birth_date.split(
                                      '/'
                                  )[0],
                              ]),
                              'years',
                              true
                          )
                          .toFixed('1')}{' '}
                      <span style={{ marginLeft: '0.15em' }}>yrs</span>
                  </div>
                  <div className="flex_middle">
                      <a
                          href={`/clients/individual/owner/${element.owner_id}/pet/${element.pet_id}`}
                          target={'_blank'}
                          rel="noreferrer nofollow"
                      >
                          <FontAwesomeIcon
                              icon={faArrowRight}
                              className="arrow"
                          />
                      </a>
                  </div>
              </div>
          ))}
      </div>
  )
}

PetDetails.propTypes = {}

export default PetDetails