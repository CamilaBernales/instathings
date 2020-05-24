import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import { FirebaseContext } from "../../firebase";
import Error404 from "../../components/layout/404";
import Layout from "../../components/layout/Layout";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import ClockLoader from "react-spinners/ClockLoader";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Div, InputSubmit } from "../../components/ui/Form";
import Boton from "../../components/ui/Boton";

const Position = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 45vh;
`;
const ContainerProduct = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
  }
`;
const AuthorProduct = styled.p`
  padding: 0.5rem 2rem;
  background-color: #7c3c21;
  color: #fff;
  text-trasform: uppercase;
  font-weight: bold;
  display: inline-block;
  text-align: center;
`;
const Product = () => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const router = useRouter();
  const [comment, setComment] = useState({});
  const [fetchDB, setFetchDB] = useState(true);

  const {
    query: { id },
  } = router;

  const { firebase, user } = useContext(FirebaseContext);

  useEffect(() => {
    if (id && fetchDB) {
      const getProduct = async () => {
        const productQuery = await firebase.db.collection("products").doc(id);
        const product = await productQuery.get();
        setProduct(product.data());
        if (product.exists) {
          setProduct(product.data());
          setFetchDB(false);
        } else {
          setError(true);
          setFetchDB(false);
        }
      };
      getProduct();
    }
  }, [id]);

  if (Object.keys(product).length === 0 && !error) {
    return (
      <Position>
        <ClockLoader color={"#7c3c21"} size={100} />
      </Position>
    );
  }

  const {
    comments,
    company,
    creado,
    description,
    name,
    url,
    votes,
    urlImage,
    author,
    votedby,
  } = product;

  const voteProduct = () => {
    if (!user) {
      return router.push("/login");
    }
    const votesTotal = votes + 1;
    if (votedby.includes(user.uid)) return;
    const newvotedby = [...votedby, user.uid];

    firebase.db
      .collection("products")
      .doc(id)
      .update({ votes: votesTotal, votedby: newvotedby });

    setProduct({
      ...product,
      votes: votesTotal,
    });
    setFetchDB(true); //fetch new votes
  };

  const commentChange = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
    setFetchDB(true); //fecth new comments
  };

  const isAuthor = (id) => {
    if (author.id == id) {
      return true;
    }
  };

  const addComment = (e) => {
    e.preventDefault();
    if (!user) {
      return router.push("/");
    }
    comment.userId = user.uid;
    comment.userName = user.displayName;

    const newComment = [...comments, comment];
    firebase.db.collection("products").doc(id).update({
      comments: newComment,
    });
    setComment({
      ...product,
      comments: newComment,
    });
  };

  const canDelete = () => {
    if (!user) return false;
    if (author.id === user.uid) {
      return true;
    }
  };

  const deleterProductDB = async () => {
    if (!user) {
      return router.push("/login");
    }
    if (author.id !== user.uid) {
      return router.push("/login");
    }

    try {
      await firebase.db.collection("products").doc(id).delete();
      router.push("/");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Layout>
      <>
        {error ? (
          <Error404 />
        ) : (
          <div className="container">
            <h1
              css={css`
                text-align: center;
                margin-top: 5rem;
              `}
            >
              {name}
            </h1>
            <ContainerProduct>
              <div>
                <p>Published {formatDistanceToNow(new Date(creado))} ago</p>
                <p>
                  Author: {author.name} of {company}
                </p>
                <img src={urlImage} />
                <p>{description}</p>
                {user ? (
                  <>
                    <h2>Add a comment</h2>
                    <form onSubmit={addComment}>
                      <Div>
                        <input
                          type="text"
                          name="message"
                          onChange={commentChange}
                        />
                      </Div>
                      <InputSubmit type="submit" value="Send" />
                    </form>
                  </>
                ) : null}
                <h2
                  css={css`
                    margin: 2rem 0;
                  `}
                >
                  Comments
                </h2>
                {comments.length === 0 ? <h3>No comment yet</h3> : (
                <ul>
                  {comments.map((comment, i) => (
                    <li
                      key={`${comment.userId}-${i}`}
                      css={css`
                        border: 1px solid #e1e1e1;
                        padding: 2rem;
                      `}
                    >
                      <p>{comment.message}</p>
                      <p>
                        {" "}
                        By:
                        <span
                          css={css`
                            font-weight: bold;
                          `}
                        >
                          {""} {comment.userName}
                        </span>
                      </p>
                      {isAuthor(comment.userId) && (
                        <AuthorProduct>Author</AuthorProduct>
                      )}
                    </li>
                  ))}
                </ul>
                )}
              </div>
              <aside>
                <Boton target="_blank" bgColor="true" href={url}>
                  Go to URL
                </Boton>

                {user ? (
                  <>
                    <div
                      css={css`
                        margin-top: 5rem;
                      `}
                    >
                      <p
                        css={css`
                          text-align: center;
                        `}
                      >
                        {votes} Votes
                      </p>
                      <Boton onClick={() => voteProduct()}>Vote</Boton>
                    </div>
                  </>
                ) : null}
              </aside>
            </ContainerProduct>
            {canDelete() && <Boton onClick={deleterProductDB}>Delete</Boton>}
          </div>
        )}
      </>
    </Layout>
  );
};

export default Product;
