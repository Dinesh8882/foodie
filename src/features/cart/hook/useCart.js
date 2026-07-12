import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { addCart, decQuantity, deleteItem, incrQuantity, clearCart } from "../slicers/cartSlicer";
import { useNavigate } from "react-router-dom";

export const useCart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products)
  const cartItem = useSelector((state) => state.cart.cartItem)
  const navigate = useNavigate()

  const addCartItem = (id) => {
    dispatch(addCart(id));
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

  const clearCartItems = () => {
    dispatch(clearCart())
  }

  const cartIsEmpty = (msg) => {
    if (cartItem.length === 0) {
      return toast.success(msg)
    }
    navigate("/checkout")
  }

  return {
    addCartItem,
    deleteCartItem,
    increaseQuan,
    decreaseQuan,
    products,
    cartItem,
    clearCartItems,
    cartIsEmpty,
    navigate
  };
};