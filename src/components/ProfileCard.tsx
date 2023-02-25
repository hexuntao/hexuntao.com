import Image from 'next/image'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ProfileCardInfo } from './ProfileInfo'

export function ProfileCard() {
  let ref = useRef(null)
  let [style, setStyle] = useState<React.CSSProperties>({})

  let onMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current || window.innerWidth < 1280) return

    let { clientX, clientY } = e
    let { width, height, x, y } = ref.current.getBoundingClientRect()
    let mouseX = Math.abs(clientX - x)
    let mouseY = Math.abs(clientY - y)
    let rotateMin = -15
    let rotateMax = 15
    let rotateRange = rotateMax - rotateMin

    let rotate = {
      x: rotateMax - (mouseY / height) * rotateRange,
      y: rotateMin + (mouseX / width) * rotateRange,
    }

    setStyle({
      transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    })
  }, [])

  let onMouseLeave = useCallback(() => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' })
  }, [])

  useEffect(() => {
    let { current } = ref
    if (!current) return
    current.addEventListener('mousemove', onMouseMove)
    current.addEventListener('mouseleave', onMouseLeave)
    return () => {
      if (!current) return
      current.removeEventListener('mousemove', onMouseMove)
      current.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [onMouseLeave, onMouseMove])

  return (
    <div
      className="umami--mouseenter--profile-card-hover z-10 mb-20 scale-100 transition-all duration-200 ease-out hover:z-50 hover:scale-[1.15]"
      style={{ perspective: '600px', width: 300, margin: '0 auto 40px' }}
      ref={ref}
    >
      <div
        style={style}
        className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg shadow-cyan-100/50 transition-all duration-200 ease-out dark:bg-dark dark:shadow-cyan-700/50"
      >
        <Image
          src={'/static/avatar.png'}
          alt="avatar"
          width={648}
          height={834}
          className="object-cover"
          style={{ width: 300, height: 300 }}
        />
        <ProfileCardInfo />
        <span className="h-1.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
      </div>
    </div>
  )
}
