import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Buscar from "../ui/Buscar";
import Navbar from "./Navbar";
import Boton from "../ui/Boton";
const Header = () => {
  const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
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

  const usuario = false;
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
          `}
        >
          <Link href="/">
            <Logo>Next</Logo>
          </Link>

          <Buscar />
          <Navbar />
        </div>

        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          {usuario ? (
            <>
              <p
                css={css`
                  margin-right: 2rem;
                `}
              >
                Hola: Camila{" "}
              </p>
              <Boton bgColor="true">Log Up</Boton>
            </>
          ) : (
            <>
              <Link href="/login">
                <Boton bgColor="true">Login</Boton>
              </Link>
              <Link href="/sign-up">
                <Boton>Sing Up</Boton>
              </Link>
            </>
          )}
        </div>
      </ContenedorHeader>
    </header>
  );
};

export default Header;
