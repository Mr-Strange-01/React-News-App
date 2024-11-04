import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

export default function InfinitySpinComponent() {
  return (
    <div className="text-center">
        <InfinitySpin
            visible={true}
            width="200"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
            />
    </div>
  )
}
