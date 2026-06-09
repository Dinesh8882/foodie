import React from 'react'
import { FiSettings } from "react-icons/fi";

import Wrapper from './Wrapper'

function Progress({title}) {
    return (
        <Wrapper>

            <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
                <div className="p-4 rounded-full bg-gray-100 mb-4">
                    <FiSettings className="text-5xl text-gray-600 animate-spin-slow" />
                </div>

                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Settings Coming Soon
                </h1>

                <p className="max-w-md text-gray-600">
                    We're currently working on the {title} page to bring you a better
                    experience. This section will be available soon.
                </p>
            </div>
        </Wrapper>
    )
}

export default Progress
