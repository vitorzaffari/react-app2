import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/contextaa";

const SingleProduct = (props) => {
  // console.log(props.item.inStock);

  const {
    state: { cart },
    dispatch,
  } = CartState();

    // console.log(cart);
    
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={props.item.image} alt={props.item.name} />
        <Card.Body>
          <Card.Title>{props.item.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>${props.item.price}</span>
            {props.item.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={props.item.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === props.item.id) ? (
            <Button onClick={() => {dispatch({type: 'REMOVE_FROM_CART', payload: props.item})}} variant="danger">Remove from cart</Button>
          ) : (
            <Button onClick={() => {dispatch({type: 'ADD_TO_CART', payload: props.item})}} disabled={!props.item.inStock}>
              {!props.item.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
