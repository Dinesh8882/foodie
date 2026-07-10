import { useDispatch, useSelector } from "react-redux"
import { placeOrders } from "../slicer/orderSlicer"
import { useCart } from "../../cart/hook/useCart"

const useOrders = () => {

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.cartItem)
    const { clearCartItems } = useCart()


    const placedOrder = ({ address, paymentMethod, deliveryOption, subtotal, total }) => {
        dispatch(placeOrders({
            items: cartItems,
            address,
            paymentMethod,
            deliveryOption,
            subtotal,
            total
        }))
        clearCartItems()
    }

    return {
        placedOrder
    }
}


export default useOrders