import React from 'react'
import { FiArrowLeft, FiSettings } from "react-icons/fi";

import Wrapper from './Wrapper'
import { useNavigate, useNavigation } from 'react-router-dom';

function Progress({ title }) {
    const navigate = useNavigate()

    
    return (
        <Wrapper>
            <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">



                <div className="p-4 rounded-full bg-gray-100">
                    <FiSettings className="text-5xl text-gray-600 animate-spin-slow" />
                </div>

                <h1 className="mt-4 text-2xl font-bold text-gray-800">
                    Work in Progress
                </h1>

                <p className="max-w-md mt-2 text-gray-600">
                    We're currently working on the <span className="font-medium">{title}</span> page
                    to bring you a better experience. This section will be available soon.
                </p>
                <div className='mt-3'>
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center cursor-pointer gap-2 px-4 py-1 bg-black text-white rounded-lg hover:opacity-90 transition"
                    >
                        <FiArrowLeft />
                        Go Back
                    </button>
                </div>
            </div>

        </Wrapper>
    )
}

export default Progress
