import React from "react";
import styled from "@emotion/styled";
import Layout from '../components/layout/Layout';

const Heading = styled.h1`
  color: red;
`;

const Home = () => {
  return (
      <div>
          <Layout>
              <h1>Inicio</h1>
          </Layout>

      </div>
  )
};
export default Home;
