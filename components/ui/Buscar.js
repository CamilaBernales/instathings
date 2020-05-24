import React,{useState} from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import Router from 'next/router';

const InputText = styled.input`
border: 1px solid var(--gris3);
padding: 1rem;
width: 300px;

@media only screen and (max-height: 1024px) and (max-width: 768px)  {
    width: 27vh;
}
`;
const InputSubmit = styled.button`
height: 3rem;
width: 3rem;
display: block;
background-size: 4rem;
background-image: url('/static/img/buscar.png');
background-repeat: no-repeat;
position: absolute;
right: 1rem;
top: 1px;
background-color: white;
border: none;
text-indent: -9999px;

&:hover {
    cursor: pointer;
}
`;


const Buscar = () => {

    const [search, setSearch] = useState('');
    
    const searchProduct = e => {
        e.preventDefault();
        
        if(search.trim() === '') return;
        Router.push({
            pathname: "/search",
            query:{
                q : search
            }
        })
    }

    return (
        <form
            css={css`
                position:relative;
            `}
            onSubmit={searchProduct}
            >
            <InputText 
            type="text" 
            placeholder="Discover something..."
            onChange={e => setSearch(e.target.value)}
            />
            <InputSubmit type="submit">Buscar</InputSubmit>
        </form>
    )
}


export default Buscar