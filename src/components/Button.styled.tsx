import styled from "styled-components"

export const StyledBtn = styled.button`
    border: none;
    background-color: #4E71FE;
    width: 86px;
    height: 30px;
    padding: 4px 20px 6px 20px;
    border-radius: 5px;
    color: snow;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;

    &:last-child {
    border: 2px solid #4E71FE;
    background-color: transparent;
    color: #4E71FE;
    }
`

export const ButtonSpace = styled.div`
    display: flex;
    gap: 12px;
`