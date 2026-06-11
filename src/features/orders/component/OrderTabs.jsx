import { FiCalendar, FiChevronDown } from "react-icons/fi";

function OrderTabs() {
  return (
    <div className="flex sm:items-center sm:flex-row flex-col gap-4 sm:gap-0  justify-between bg-white px-3 sm:px-6 py-4">

      {/* Tabs */}
      <div className="flex items-center text-[clamp(13px,1.55vw,17px)] justify-between sm:gap-5 ">
        <button className="relative pb-3 text-orange-500 font-medium">
          All Orders
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-500"></span>
        </button>

        <button className="pb-3 text-gray-500 hover:text-black">
          Delivered
        </button>

        <button className="pb-3 text-gray-500 hover:text-black">
          Preparing
        </button>

        <button className="pb-3 text-gray-500 hover:text-black">
          Cancelled
        </button>
      </div>

      {/* Filter Dropdown */}
      <button className="flex text-[clamp(13px,1.55vw,17px)] justify-between items-center gap-3 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50">
        <div className="flex gap-2 items-center">
          <FiCalendar size={18} />
          <span>All Time</span>
        </div>
        <FiChevronDown size={18} />
      </button>
    </div>
  );
}

export default OrderTabs;