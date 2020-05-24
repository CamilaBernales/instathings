import React from "react";
import { css } from "@emotion/core";

const Error404 = () => {
  return (
      <h1
        css={
            css`
            margin-top:5rem;
            text-align:center
            `
        }
      >
          The product you are looking for is not available.
      </h1>
  )
};
export default Error404;
