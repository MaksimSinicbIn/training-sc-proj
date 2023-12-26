import styled from "styled-components";
import img from '../assets/images/Dune.png';

export const Content = styled.div`
    width: 280px;
    height: 170px;
    border-radius: 10px;
    background: url(${img}), lightgray 50% / cover no-repeat;
    background-size: cover;
    background-position: center;
    transition: 0.7s;
    
    &:hover {
    transform: scale(1.5);
    transition: 0.7s
    }
`