import React from 'react'
import { KeunggulanContainer } from './keunggulan.styles'

function Keunggulan({title, desc}) {
  return (
    <KeunggulanContainer
      display="flex"
      flexDirection="column"
      flexBasis="33%"
      primary="true"
    >
      <h6>{title}</h6>
      <p>{ desc}</p>
    </KeunggulanContainer>
  )
}

export default Keunggulan
