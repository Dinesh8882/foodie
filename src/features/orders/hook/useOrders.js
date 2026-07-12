import { useDispatch, useSelector } from "react-redux"
import { placeOrders } from "../slicer/orderSlicer"
import { useCart } from "../../cart/hook/useCart"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { SidbarContext } from "../../../context/SidbarContext"

const useOrders = () => {

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.cartItem)
    const orders = useSelector((state) => state.order.orders)
    const { clearCartItems, navigate } = useCart()
    const { setActive } = useContext(SidbarContext)



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
        toast.success("Order Placed!")
        navigate("/orders")
        setActive("My Orders")
    }

    return {
        placedOrder,
        orders
    }
}


export default useOrders