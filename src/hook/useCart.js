import { useDispatch } from "react-redux";
import { addCart, deleteItem } from '../features/cart/slicers/cartSlicer'

export const useCart = () => {
  const dispatch = useDispatch();

  const addCartItem = (item) => {
    dispatch(addCart(item));
  };

  const deleteCartItem = (id) => {
    dispatch(deleteItem(id));
  };

  return {
    addCartItem,
    deleteCartItem,
  };
};