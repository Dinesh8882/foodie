import { useState } from "react";

const categories = [
  "All",
  "Pizza",
  "Burger",
  "Pasta",
  "Drinks",
  "Desserts",
];

export default function CategoryTabs() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="flex gap-3 overflow-x-auto scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveTab(category)}
          className={`px-4 py-1 cursor-pointer rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
            activeTab === category
              ? "bg-orange-500 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}