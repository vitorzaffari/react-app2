import { Button, Form } from "react-bootstrap";
import "./styles.css";
import Rating from "./Rating";
import { CartState } from "../context/contextaa";
const Filters = () => {

  const {
    productState: { byStock, byFastDelivery, sort, byRating },
    productDispatch,
  } = CartState();


  console.log(byStock, byFastDelivery, sort, byRating);
  
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() => productDispatch({type:'SORT_BY_PRICE', payload: 'lowToHigh',})}
          checked={sort === 'lowToHigh' ? true :false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() => productDispatch({type:'SORT_BY_PRICE', payload: 'highToLow',})}
          checked={sort === 'highToLow' ? true :false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() => productDispatch({type:'FILTER_BY_STOCK',})}
          checked={ byStock }
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast delivery only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() => productDispatch({type:'FILTER_BY_DELIVERY',})}
          checked={ byFastDelivery }
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating</label>
        <Rating
          rating={byRating}
          onClick={(index) => productDispatch({type:'FILTER_BY_RATING', payload: index+1})}
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button variant="light" onClick={() => productDispatch({type: 'CLEAR_FILTERS',})}>Clear Filters</Button>
    </div>
  );
};

export default Filters;
