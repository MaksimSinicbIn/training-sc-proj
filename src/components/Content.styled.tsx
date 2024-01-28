import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    height: 170px;
    border-radius: 10px;
    object-fit: cover;
    transition: 0.7s;
    
    &:hover {
    transform: scale(1.5);
    transition: 0.7s
    }
`