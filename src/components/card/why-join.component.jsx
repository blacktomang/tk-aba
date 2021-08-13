import React from 'react'
import styled from 'styled-components'

function WhyJoin() {
  return (
    <>
      <AlignUl >
        <li>
          <img src="/images/li1.svg" alt="box" />
          <p>Alasan 1</p>
        </li>
        <li>
          <img src="/images/li1.svg" alt="box" />
          <p>Alasan 2</p>
        </li>
        <li>
          <img src="/images/li1.svg" alt="box" />
          <p>Alasan 3</p>
        </li>
      </AlignUl>
    </>
  )
}

export default WhyJoin

const AlignUl = styled.ul`
display:flex;
flex-direction:column;
gap:1rem;
justify-content:start;
li{
  display:flex;
  justify-content:space-around;
  width: 200px;
  align-items: center;
  color:var(--first-color);
}
`