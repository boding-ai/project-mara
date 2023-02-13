import React from 'react'

import Card from '../tools/Card'

import { free, pro } from '../data/features'

const First = props => {
  return (
      <>
          <div className="flex_evenly" style={{ width: '1100px', margin: '90px 0 20px 0' }} >
              <Card
                  title={'Free'}
                  currency={String.fromCharCode(0x20b9)}
                  price={'0'}
                  duration={''}
                  features={free}
              />
              <Card
                  title={'Pro'}
                  currency={String.fromCharCode(0x20b9)}
                  price={'359'}
                  duration={'per month'}
                  features={pro}
              />
          </div>
      </>
  )
}

First.propTypes = {}

export default First