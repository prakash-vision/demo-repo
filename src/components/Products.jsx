import React, { Fragment } from "react";
import "../style/product.css";
import { FaShoppingBag } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCart } from "../redux/slice/productSlice";

const Products = () => {
  const product = useSelector((store) => store.myStore.products.products);
  const cart = useSelector((store) => store.myStore.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const checkInCart = (id) => {
    const check = cart.filter((value) => {
      return value.id == id;
    });

    if (check.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleRemoveFromCart = (id) => {
    const filterData = cart.filter((data) => {
      return data.id != id;
    });

    dispatch(updateCart(filterData));
  };

  return (
    <Fragment>
      <Container>
        <Row>
          {product?.map((product) => {
            return (
              <Col sm="3" className="py-3" key={product.id}>
                <Card className="bg-dark text-white border-0 h-100">
                  <Link to={`details/${product.id}`}>
                    <div className="product-image">
                      <img
                        alt="Sample"
                        className="cursor-pointer"
                        src={
                          product.images.length > 1
                            ? product.images[1]
                            : product.images
                        }
                      />
                    </div>
                  </Link>
                  <CardBody>
                    <CardText className="fw-bold my-2">
                      {product.title}
                    </CardText>
                    <CardTitle
                      tag="h6"
                      className="fw-bold my-3"
                      style={{ color: "#55AA77" }}
                    >
                      ${product.price}
                    </CardTitle>
                    <Button className="bg-white text-black d-flex gap-2 cursor-pointer">
                      {checkInCart(product.id) ? (
                        <MdRemoveShoppingCart
                          size={25}
                          color="#DC3545"
                          onClick={() => handleRemoveFromCart(product.id)}
                        />
                      ) : (
                        <FaShoppingBag
                          size={25}
                          color="#55AA77"
                          onClick={() => handleAddToCart(product)}
                        />
                      )}
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Products;
