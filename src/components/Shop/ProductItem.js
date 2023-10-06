import { cartChangerActions } from "../../store/cart-functionality";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useSelector, useDispatch } from "react-redux";

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();

  const cartAdderHandler = () => {
    dispatch(cartChangerActions.itemAdd());
  };

  return (
    <li className={classes.item} key={id}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={cartAdderHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
