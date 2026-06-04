import { FiX } from "react-icons/fi";

function OrderDetailsHeader({ toggle }) {
  return (
    <div className="flex items-center justify-between px-6 py-2 border-b border-gray-200 bg-white">
      <h2 className="text-xl font-semibold text-gray-900">
        Order Details
      </h2>

      <button
        onClick={toggle}
        className="text-gray-500 cursor-pointer hover:text-gray-700 transition"
      >
        <FiX size={20} />
      </button>
    </div>
  );
}

export default OrderDetailsHeader;