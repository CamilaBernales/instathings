import React, { useState, useContext } from "react";
import Router, { useRouter } from "next/router";
import { css } from "@emotion/core";
import Layout from "../components/layout/Layout";
import { Form, Div, InputSubmit, Error } from "../components/ui/Form";
import { FirebaseContext } from "../firebase";
import FileUploader from "react-firebase-file-uploader";
//validaciones
import useValidation from "../hooks/useValidation";
import validateProduct from "../validation/validateProduct";
import { firestore } from "firebase";

const STATE_INITIAL = {
  name: "",
  company: "",
  image: "",
  url: "",
  description: "",
};

const NewProduct = () => {
  const [error, setError] = useState(false);
  const [imageName, setImageName] = useState("");
  const [upload, setUpload] = useState(false);
  const [progress, setProgress] = useState(0);
  const [urlImage, setUrlImage] = useState("");
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidation(STATE_INITIAL, validateProduct, addProduct);

  const { name, company, image, url, description } = values;

  const router = useRouter();

  const { user, firebase } = useContext(FirebaseContext);

  async function addProduct() {
    if (!user) {
      return router.push("/");
    }
    const product = {
      name,
      company,
      url,
      urlImage,
      description,
      votes: 0,
      comments: [],
      creado: Date.now(),
      author:{
        id: user.uid,
        name: user.displayName
      },
      votedby:[]
    }
    
    firebase.db.collection("products").add(product);
    return router.push('/');
  }
  const handleUploadStart = () => {
    setProgress(0);
    setUpload(true);
  };

  const handleProgress = (progress) => setProgress({ progress });

  const handleUploadError = (error) => {
    setUpload(error);
  };

  const handleUploadSuccess = (name) => {
    setProgress(100);
    setUpload(false);
    setImageName(name);
    firebase
      .storage
      .ref("products")
      .child(name)
      .getDownloadURL()
      .then((url) => {
        setUrlImage(url);
      });
  };
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
            New Product
          </h1>
          <Form onSubmit={handleSubmit} noValidate>
            <fieldset>
              <legend>General</legend>

              <Div>
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Product Name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Div>
              {errors.name ? <Error>{errors.name}</Error> : null}

              <Div>
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  placeholder="Company"
                  name="company"
                  value={company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Div>
              {errors.company ? <Error>{errors.company}</Error> : null}

              <Div>
                <label htmlFor="image">Image</label>
                <FileUploader 
                        accept="image/*"
                        id="image"
                        name="image"
                        randomizeFilename
                        storageRef={firebase.storage.ref("products")}
                        onUploadStart={handleUploadStart}
                        onUploadError={handleUploadError}
                        onUploadSuccess={handleUploadSuccess}
                        onProgress={handleProgress}
                    />
              </Div>

              <Div>
                <label htmlFor="image">URL</label>
                <input
                  type="url"
                  id="ulr"
                  name="url"
                  value={url}
                  placeholder="Product URL"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Div>
              {errors.url ? <Error>{errors.url}</Error> : null}
            </fieldset>

            <fieldset>
              <legend>About your product</legend>

              <Div>
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Div>
              {errors.description ? <Error>{errors.description}</Error> : null}
            </fieldset>
            {error ? <Error>{error}</Error> : null}
            <InputSubmit type="submit" value="ADD!" />
          </Form>
        </>
      </Layout>
    </div>
  );
};
export default NewProduct;
