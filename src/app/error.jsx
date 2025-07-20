'use client' // Error boundaries must be Client Components
import React from 'react'

const error = () => {
  return (
    <div className='h-screen'>
        <h1 className='text-3xl text-red-500 font-bold'>Something went wrong</h1>

    </div>
  )
}

export default error