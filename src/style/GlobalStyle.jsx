import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        background-color: #131313;
        color:#aaaaaa;
    }

    .link{
        color:#aaaaaa;
        text-decoration: none;
    }

    .link-btn{
        text-decoration: none;
        color: #000;
        &:hover{
            color:#000;
        }
    }


`;
