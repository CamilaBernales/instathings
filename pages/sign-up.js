import React from "react";
import { css } from "@emotion/core";
import Layout from "../components/layout/Layout";
import { Form, Div, InputSubmit, Error } from "../components/ui/Form";
import firebase from '../firebase'
//validaciones
import useValidation from "../hooks/useValidation";
import validateSignUp from "../validation/validateSignUp";
const SignUp = () => {
  const STATE_INITIAL = {
    name: "",
    email: "",
    password: "",
  };
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
  } = useValidation(STATE_INITIAL, validateSignUp, createAccount);

  const { name, email, password } = values;

  async function createAccount() {


    try {
      await  firebase.signup(name, email, password);

    } catch (error) {
      console.error("Hubo un error", error.message);
    }
  }
  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >
            Sing Up
          </h1>
          <Form onSubmit={handleSubmit}
          noValidate>
            <Div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                name="name"
                value={name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Div>

              {errors.name ? <Error>{errors.name}</Error> : null}
            <Div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
                value={email}
                onBlur={handleBlur}

              />
            </Div>
            {errors.email ? <Error>{errors.email}</Error> : null}

            <Div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Your password"
                name="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}

              />
            </Div>
            {errors.password ? <Error>{errors.password}</Error> : null}

            <InputSubmit type="submit" value="Create Account" />
          </Form>
        </>
      </Layout>
    </div>
  );
};
export default SignUp;
