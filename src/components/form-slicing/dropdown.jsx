import React from 'react';
import styled from 'styled-components';

const DropdownStyled = styled.select`
  width: 100%;
  border: 2px solid #979797;
  padding: 0.8rem 1rem !important;
  border-radius: 30px;
  background: none;
  outline: none;
  margin-top: 0.5rem;
  label {
    border: none;
  }
`;
function Dropdown({ data, label }) {
  return (
    <>
      <DropdownStyled name={label} id={label}>
        {label}
        {data.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </DropdownStyled>
    </>
  );
}

export default Dropdown;
