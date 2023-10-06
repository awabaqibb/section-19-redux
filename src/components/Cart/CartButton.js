import { cartActions } from "../../store/cart-store";
import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";

const CartButton = (props) => {
  const itemsAmount = useSelector((state) => state.cartChanger.itemsAmount);
  const dispatch = useDispatch();

  const showCartHandler = (params) => {
    dispatch(cartActions.toggle());
  };

  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsAmount}</span>
    </button>
  );
};

export default CartButton;
