import "./products.css";
import QuantityPicker from "./quantityPicker";
import DataService from "../services/dataService";
import { useState } from "react";

const Product = (props) => {
  //   console.log("the value is: " + props.title);

  let [quantity, setQuantity] = useState(1);

  const onQuantityChange = (value) => {
    setQuantity(value);
  };
  const getTotal = () => {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  };

  return (
    <div className="product">
      <img src={"/img/" + props.data.image}></img>
      {/* <img src="https://picsum.photos/200/300"></img> */}
      <h3>{props.data.title}</h3>
      <label>
        List Price: <span>${props.data.price}</span>
      </label>
      <label>Total: {getTotal()}</label>
      <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
      <button className="btn btn-danger btn-sm">Add</button>
    </div>
  );
};

export default Product;
