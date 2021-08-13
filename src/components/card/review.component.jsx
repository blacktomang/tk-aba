import React from 'react'
import styled from 'styled-components'
import { Container } from '../navbar/navbar.styles'


const PoliImage = styled.img`
clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`

function Review({image,name, ownerOf, say}) {
  return (
    <>
      <Container display="flex">
        <PoliImage src="/images/clients/mark.jpg" alt="" />
        <div className="body">
          <p>cuk</p>
          <div className="small">
            <p>Mark </p>
            <p>Facebook</p>            
          </div>
        </div>
      </Container>
    </>
  )
}

export default Review
