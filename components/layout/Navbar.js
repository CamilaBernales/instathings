import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
const Navbar = () =>{


const Nav = styled.nav`
    padding-left: 2rem;
    a{
        font-size: 1.8rem;
        margin-left:2rem;
        color: var(--gris2);
        font-family: 'Roboto', sans-serif;
    

    &:last-of-type{
        margin-right: 0;
    }
}
`;

    return(
        <Nav>
            <Link href="/">Home</Link>
            <Link href="/popular">Popular</Link>
            <Link href="/newproduct">New Product</Link>
        </Nav>
    )

}
export default Navbar