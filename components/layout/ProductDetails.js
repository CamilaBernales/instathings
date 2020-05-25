import React from "react";
import styled from "@emotion/styled";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Link from 'next/link'
const Image = styled.img`
  width: 200px;
`;
const Product = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1e1e1;

`;
const Description = styled.div`
  font-size: 1.6rem;
  margin: 0;
  color: #888;
`;
const Comments = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  margin-buttom: 40px;
  div {
    display: flex;
    align-items: center;
    border: 1px solid #e1e1e1;
    padding: 1rem 3rem;
    margin-right: 2rem;
  }
  img {
    width: 2rem;
    margin-right: 1rem;
  }
  p {
    font-size: 2vh;
    margin-right: 0.4rem;
    font-weight: 700;
    &:last-of-type {
      margin: 0;
    }
  }
`;
const Votes = styled.div`
  text-align: center;
  border: 1px solid #e1e1e1;
  padding: 1rem 3rem;

  div {
    font-size: 2rem;
  }

  p {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
  }

  @media (max-width: 768px){
    display: flex;
    margin-left:2.3rem;
    font-size: 0.5rem;
    div {
      font-size: 1.3rem;
      }
    p {
      margin-left: 0.5rem;
      font-size: 1.3rem;
      font-weight: 700;
    }

  }
`;

const Title = styled.a`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;

  :hover {
    cursor: pointer;
  }
`;

const DescriptionText = styled.p`
  diplay: flex;
  align-items:center;
  justify-content:center
  font-size: 1.6rem;
  margin: 0;
  color: #888;
`;
const ProductDetails = ({ product }) => {
  const {
    id,
    comments,
    company,
    creado,
    description,
    name,
    url,
    votes,
    urlImage,
  } = product;
  return (
    <Product>
      <Description>
        <div>
          <Image src={urlImage} />
        </div>
        <div>
          <Link href="/products/[id]" as={`/products/${id}`}>
          <Title>{name}</Title>
          </Link>
          <DescriptionText>{description}</DescriptionText>
          <Comments>
            <div>
              <img src="/static/img/comentario.png" />
              <p>{comments.length} comments</p>
            </div>
          </Comments>
          <p>Published {formatDistanceToNow(new Date(creado))} ago</p>
        </div>
      </Description>
      <Votes>
        <div>&#9650;</div>
        <p>{votes}</p>
      </Votes>
    </Product>
  );
};

export default ProductDetails;
