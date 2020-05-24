import React, { useState } from "react";
import Router from 'next/router'
import { css } from "@emotion/core";
import Layout from "../components/layout/Layout";
import { Form, Div, InputSubmit, Error } from "../components/ui/Form";
import firebase from "../firebase";
//validaciones
import useValidation from "../hooks/useValidation";
import validateLogIn from "../validation/validateLogIn";


const STATE_INITIAL = {
    email: "",
    password: "",
  };
  

const Login = () =>{
  
    const [error, setError] = useState(false);
    const {
      values,
      errors,
      handleChange,
      handleSubmit,
      handleBlur,
    } = useValidation(STATE_INITIAL, validateLogIn, login);
    const { email, password } = values;
  
async function login(){

    try {
        await firebase.login(email, password);
        Router.push('/');
    } catch (error) {
        setError(error.message);
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
              Log In
            </h1>
            <Form onSubmit={handleSubmit} noValidate>
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
              {error ? <Error>{error}</Error> : null}
              <InputSubmit type="submit" value="Log In" />
            </Form>
          </>
        </Layout>
      </div>
    );
  };
export default Login;
