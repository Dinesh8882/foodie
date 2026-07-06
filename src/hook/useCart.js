import { useDispatch } from "react-redux";
import { addCart, deleteItem, incrQuantity, decQuantity } from '../features/cart/slicers/cartSlicer'
import { toast } from "sonner";

export const useCart = () => {
  const dispatch = useDispatch();

  const addCartItem = (item) => {
    dispatch(addCart(item));
    toast.success('Item added in the cart!');
  };

  const deleteCartItem = (id) => {
    dispatch(deleteItem(id));
    toast.success('Remove item from the cart!');
  };

  const increaseQuan = (id) => {
    dispatch(incrQuantity(id))
  }

  const decreaseQuan = (id) => {
    dispatch(decQuantity(id))
  }
  return {
    addCartItem,
    deleteCartItem,
    increaseQuan,
    decreaseQuan
  };
};