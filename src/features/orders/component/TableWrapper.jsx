import React from 'react'

function TableWrapper({ children }) {
    return (
        <div className="overflow-hidden mt-4 rounded-2xl border border-gray-200 bg-white">
            <table className="w-full">
                {children}
            </table>

        </div>
    )
}

export default TableWrapper
