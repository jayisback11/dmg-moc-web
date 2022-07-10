import React, { useState, useEffect } from 'react'
import './service.css'
import { services } from './services'

function Service () {
  const [offsetY, setOffsetY] = useState(0)
  useEffect(() => {
    const scrollMove = () => {
      setOffsetY(window.pageYOffset)
    }

    window.addEventListener('scroll', scrollMove)

    return () => {
      window.removeEventListener('scroll', scrollMove)
    }
  }, [])

  return (
    <div className='service' id="service">
      <div className='service-header'>
        <div
          className='highlight-service'
          style={{
            animation:
              offsetY > 350
                ? 'top-to-bottom 1s ease-in-out forwards'
                : 'bottom-to-top 1s ease-in-out forwards'
          }}
        />
        <h1
          className='service-header-text'
          style={{
            animation:
              offsetY > 350
                ? 'show-text 1s ease-in-out forwards'
                : 'dont-show-text 1s ease-in-out forwards'
          }}
        >
          SERVICE
        </h1>
      </div>
    </div>
  )
}

export default Service
