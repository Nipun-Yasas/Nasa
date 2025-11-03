import React from 'react'

export default function Main(props) {
  const { data } = props

  return (
    <div className='imgContainer'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={data.hdurl} alt={data?.title || 'bg-image'} className='bgImage' />
    </div>
  )
}

