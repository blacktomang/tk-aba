import React from 'react'
import styled from 'styled-components'

function Scroll({children}) {
  return (
    <ScrollIt>
      {children}
    </ScrollIt>
  )
}

export default Scroll

const ScrollIt = styled.div`
@media only screen and (max-width:800px){
  overflow:scroll;
  width:100%;
}
`