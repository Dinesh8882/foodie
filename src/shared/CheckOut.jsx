import { FiShoppingBag } from "react-icons/fi";

const CheckOut = () => {
  return (
    <div className="mt-5">
      {/* Price Details */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-gray-600">
          <span>Subtotal</span>
          <span>$26.46</span>
        </div>

        <div className="flex items-center justify-between text-gray-600">
          <span>Delivery Fee</span>
          <span>$2.50</span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-gray-200"></div>

      {/* Total */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-gray-900">
          Total
        </span>

        <span className="text-xl font-bold text-orange-500">
          $28.96
        </span>
      </div>

      {/* Checkout Button */}
      <button className="w-full mt-6 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition-colors">
        <FiShoppingBag size={16} />
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CheckOut;