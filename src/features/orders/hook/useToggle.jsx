import React, { useEffect, useState } from 'react'

function useToggle(initial = false) {
    const [isOpen, setIsOpen] = useState(initial)

    const toggle = () => {
        setIsOpen(prev => !prev)
    }

    return {
        toggle,
        isOpen
    }


}

export default useToggle
