import styled, {css} from 'styled-components'
import {textStyles} from '../utils'

const ClapCount = styled.span`
  top: -${({size}) => 50 / 1.6}px;
  left: ${({size}) => 50 / 4}px;
  color: white;
  border-radius: 50%;
  backface-visibility: hidden;
  ${textStyles}

  ${({theme: {secondaryColor, size}}) => {
    const half = `${50 / 2}px`
    return css`
      height: ${half};
      width: ${half};
      line-height: ${half};
      top: -${50 / 2}px;
      left: ${50 / 4}px;
      background: ${'#ff6666'};
    `
  }}
`

export default ClapCount
