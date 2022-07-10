import React, { useState, useEffect } from 'react'
import './home.css'
import DMGLOGO from '../../assets/images/dmg_logo_white.svg'
import SUNGIRL from '../../assets/images/undraw_coffee.svg'
import DIAMOND from '../../assets/images/shiny_diamond.png'

function Home () {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const scrollMove = () => {
      setOffsetY(window.pageYOffset)
    }

    window.addEventListener('mousemove', mouseMove)
    window.addEventListener('scroll', scrollMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      window.removeEventListener('scroll', scrollMove)
    }
  }, [])

  const translateOnMouseMoveStyle = {
    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
  }

  return (
    <div className='home'>
      <img className='dmg-logo-white' src={DMGLOGO} alt='' />
      <h1
        className='home-header-text'
        style={{
          transform: `translate(${(mousePosition.x * 5) /
            250}px, ${(mousePosition.y * 5) / 250}px)`
        }}
      >
        Shine
      </h1>
      <img
        className='diamond-1'
        style={{
          transform: `translate(${(mousePosition.x * 15) /
            250}px, ${(mousePosition.y * 15) / 250}px)`
        }}
        src={DIAMOND}
        alt=''
      />
      <img
        className='diamond-2'
        style={{
          transform: `translate(${(mousePosition.x * -10) /
            250}px, ${(mousePosition.y * -10) / 250}px)`
        }}
        src={DIAMOND}
        alt=''
      />
      <img
        className='diamond-3'
        style={{
          transform: `translate(${(mousePosition.x * 15) /
            250}px, ${(mousePosition.y * 15) / 250}px)`
        }}
        src={DIAMOND}
        alt=''
      />
      <img
        className='sungirl-svg'
        src={SUNGIRL}
        alt=''
        style={{
          opacity: offsetY > 850 && '0'
        }}
      />
      <p
        className='home-small-narrative'
        style={{
          transform: `translate(${(mousePosition.x * -5) /
            250}px, ${(mousePosition.y * -5) / 250}px)`
        }}
      >
        Helping Local Small Business
      </p>
      <div className='get-started-btn'>
        <div className='highlight' />
        <a href="#service">Get Started</a>
      </div>
    </div>
  )
}

export default Home
