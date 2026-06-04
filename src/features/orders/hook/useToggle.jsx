import React, { useState } from 'react'

function useToggle(initial = true) {
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
