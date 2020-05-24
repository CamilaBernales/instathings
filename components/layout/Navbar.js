import React, { useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import FirebaseContext from "../../firebase/context";

const Nav = styled.nav`
  padding: 2rem;
  display: flex;
  align-items: center;
  a {
    font-size: 1.8rem;
    margin-left: 2rem;
    color: var(--gris2);
    font-family: "PT Sans", sans-serif;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const Navbar = () => {
  const { user } = useContext(FirebaseContext);

  return (
    <Nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/popular">
        <a>Popular</a>
      </Link>
      {user ? (
        <Link href="/newproduct">
          <a>New Product</a>
        </Link>
      ) : null}
    </Nav>
  );
};
export default Navbar;
