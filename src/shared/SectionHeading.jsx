import React from 'react'

const varients = {
  cart: "mb-0",
  orders:"mb-2",
  default: "mb-5"
}

export default function SectionHeading({ title, varient }) {
  return (
    <h2 className={`text-xl ${varients[varient] || varients.default} font-bold text-gray-900`}>
      {title}
    </h2>
  );
}