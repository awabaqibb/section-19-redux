import { cartActions } from "../../store/cart-store";
import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const showCartHandler = (params) => {
    dispatch(cartActions.toggle());
  };

  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
