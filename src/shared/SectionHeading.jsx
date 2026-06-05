import React from 'react'

const varients = {
  home:"mb-3",
  orders:"mb-2",
  default: "mb-0"
}

export default function SectionHeading({ title, varient }) {
  return (
    <h2 className={`text-xl ${varients[varient] || varients.default} font-bold text-gray-900`}>
      {title}
    </h2>
  );
}