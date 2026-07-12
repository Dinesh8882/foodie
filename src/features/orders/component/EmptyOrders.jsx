import { HiOutlineShoppingBag } from "react-icons/hi2";

const EmptyOrders = () => {
    return (
        <div className="flex min-h-[400px] flex-col items-center justify-center px-4 text-center">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                <HiOutlineShoppingBag className="text-4xl text-orange-500" />
            </div>

            <h2 className="text-2xl font-semibold text-gray-800">
                No orders yet!
            </h2>

            <p className="mt-2 max-w-sm text-gray-500">
                Your order history is empty. Start exploring and order something
                delicious!
            </p>

            <button className="mt-6 rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600">
                Explore Food
            </button>
        </div>
    );
};

export default EmptyOrders;