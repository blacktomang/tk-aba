import styled from 'styled-components';

export const NewComparison = styled.div`
  font-family: 'Poppins';
  article {
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
  table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
  }
  td,
  th {
    height: 53px;
  }
  td,
  th {
    empty-cells: show;
  }
  th {
    &.fishlog {
      background-color: var(--first-color);
      color: white;
      padding: 0.5rem 1rem !important;
      border-radius: 30px;
      width: 180px;
    }
    &.vendors {
      background-color: var(--second-color);
      color: white;
      padding: 0.5rem 1rem !important;
      border-radius: 30px;
      width: 180px;
    }
  }
  td,
  th {
    text-align: left;
  }
  td + td,
  th + th {
    text-align: center;
    display: none;
  }
  td.default {
    display: table-cell;
  }
  .txt-l {
    font-size: 28px;
    font-weight: bold;
  }
  .txt-top {
    position: relative;
    top: -9px;
    left: -2px;
  }
  .tick {
    font-size: 18px;
    color: #2ca01c;
  }
  .hide {
    border: 0;
    background: none;
  }

  @media (min-width: 640px) {
    td,
    th {
      display: table-cell !important;
    }
    td,
    th {
      width: 500px;
    }
    td + td,
    th + th {
      width: auto;
    }
  }
`;
