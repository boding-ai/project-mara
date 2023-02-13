import styled, {css} from 'styled-components'
import {textStyles} from '../utils'

const ClapCountTotal = styled.span`
  transform: scale(1);
  text-align: center;
  left: 0;
  ${textStyles}

  ${({theme: {primaryColor, size}}) => css`
    top: -${50 / 3}px;
    color: ${primaryColor};
    width: ${50}px;
  `}
`

export default ClapCountTotal
