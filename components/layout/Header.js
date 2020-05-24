import React, { useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Buscar from "../ui/Buscar";
import Navbar from "./Navbar";
import Boton from "../ui/Boton";
import { FirebaseContext } from "../../firebase";

const ContenedorHeader = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
   }
  }
`;

const Logo = styled.a`
  color: #7c3c21;
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  margin-right: 2rem;
`;
const Header = () => {
  const { user, firebase } = useContext(FirebaseContext);

  return (
    <header
      css={css`
        border-bottom: 2px solid var(--gris3);
        padding: 1rem 0;
      `}
    >
      <ContenedorHeader>
        <div
          css={css`
            display: flex;
            align-items: center;
          }
          `}
        >
          <Link href="/">
            <Logo>IT</Logo>
          </Link>

          <Buscar />
        </div>
        <Navbar />

        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          {user ? (
            <>
              <p
                css={css`
                  margin-right: 2rem;
                `}
              >
                Hi:{user.displayName}
              </p>
              <Boton bgColor="true" onClick={() => firebase.logout()}>
                Log Out
              </Boton>
            </>
          ) : (
            <>
              <div
                css={css`
                 display:flex;
                 justify-content: center;
                 margin: 0 auto;
                `}
              >
              <Link href="/login">
                <Boton bgColor="true">Login</Boton>
              </Link>
                <Link href="/sign-up">
                  <Boton>Sing Up</Boton>
                </Link>
              </div>
            </>
          )}
        </div>
      </ContenedorHeader>
    </header>
  );
};

export default Header;
