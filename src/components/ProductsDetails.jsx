import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import { product } from "../utils/product";
import "../style/product-details.css";
import { FaShoppingCart } from "react-icons/fa";
import ErrorPage from "./ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice/productSlice";

const ProductsDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState([]);

  const dispatch = useDispatch();

  const product = useSelector((store) => store.myStore.products.products);

  useEffect(() => {
    const result = product?.filter((product) => {
      return product.id == id;
    })[0];

    setProductDetails(result);
  }, []);

  const handleAddToCart = () => {
    console.log(productDetails);
    dispatch(addToCart(productDetails));
  };

  // if (!productDetails) {
  //   return <ErrorPage />;
  // }

  return (
    <Fragment>
      <section className="product-details pt-5">
        <Container>
          <Row>
            <Col>
              <div className="wrap">
                <div className="img-wrap">
                  <img src={productDetails?.images} alt="img" />
                </div>
              </div>
            </Col>
            <Col className="col-two d-flex flex-column justify-content-between">
              <div className="wrap-div">
                <div className="title">
                  <h2 className="text-white fw-bold">
                    {productDetails?.title}
                  </h2>
                </div>
                <div className="price py-3">
                  <h4 className="fw-bold" style={{ color: "#55AA77" }}>
                    ${productDetails?.price}
                  </h4>
                </div>
                <div className="description">
                  <p className="text-white">{productDetails?.description}</p>
                </div>
              </div>

              <div className="">
                <Button className="px-5 py-2 bg-white text-black ">
                  <FaShoppingCart size={25} onClick={handleAddToCart} />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default ProductsDetails;
