import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { FaStar } from "react-icons/fa";
import "../style/cart.css";
import { updateCart } from "../redux/slice/productSlice";

const Cart = () => {
  const cart = useSelector((store) => store.myStore.cart);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    const filterData = cart.filter((data) => {
      return data.id != id;
    });

    dispatch(updateCart(filterData));
  };

  useEffect(() => {
    let count = 0;

    cart.forEach((val) => {
      count += val.price;
    });

    setTotal(Math.round(count * 100) / 100);
  }, [cart]);

  return (
    <Fragment>
      <Container fluid>
        <Row className="my-2">
          <Col sm="6" className="border-right border-white">
            {cart.map((cart) => {
              return (
                <Col className="my-3">
                  <div className="d-flex gap-3">
                    <div className="col-3 img-wrap">
                      <img src={cart.thumbnail} />
                    </div>

                    <div className="col-9 product-details text-white">
                      <h3>{cart.title}</h3>
                      <p className="fs-4" style={{ color: "#55AA77" }}>
                        ${cart.price}
                      </p>

                      <p className="">{cart.description}</p>

                      <p className="m-0 d-flex gap-1 align-items-center">
                        <span> {cart.rating}</span> <FaStar color="#FADB14" />
                      </p>
                      <button
                        className="btn btn-danger my-2"
                        onClick={() => handleRemoveFromCart(cart.id)}
                      >
                        Remove From Cart
                      </button>
                    </div>
                  </div>

                  <div className="py-2 border-bottom border-white"></div>
                </Col>
              );
            })}
          </Col>

          <Col
            sm="6"
            className="text-white d-flex flex-column justify-content-between"
          >
            <h2>
              Total Cart Value :{" "}
              <span style={{ color: "#07C551" }}>${total}</span>
            </h2>

            <div className="mt-4 mb-2">
              <button className="btn checkout-btn">Check Out (${total})</button>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Cart;
