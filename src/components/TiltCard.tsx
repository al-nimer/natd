import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion'
import type { ReactNode } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
}

const MAX_TILT = 8

export function TiltCard({ children, className = '' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 }
  const rotateX = useSpring(useTransform(y, [0, 1], [MAX_TILT, -MAX_TILT]), springConfig)
  const rotateY = useSpring(useTransform(x, [0, 1], [-MAX_TILT, MAX_TILT]), springConfig)
  const glareX = useTransform(x, [0, 1], [0, 100])
  const glareY = useTransform(y, [0, 1], [0, 100])

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  function handlePointerLeave() {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ scale: 1.02 }}
      transition={{ scale: { duration: 0.25 } }}
      className={`group relative ${className}`}
    >
      <Glare x={glareX} y={glareY} />
      {children}
    </motion.div>
  )
}

function Glare({ x, y }: { x: MotionValue<number>; y: MotionValue<number> }) {
  const background = useTransform([x, y], ([xv, yv]: number[]) =>
    `radial-gradient(circle at ${xv}% ${yv}%, rgba(255,255,255,0.35), transparent 60%)`,
  )

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{ background }}
    />
  )
}
