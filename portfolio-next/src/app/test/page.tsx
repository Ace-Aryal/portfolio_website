'use client'
import React from 'react'
import { motion } from 'motion/react'
function FramerMotion() {
  return (
    <div className="h-full w-full">
      <motion.div
        className="h-64 w-64 bg-red-500"
        animate={{
          x: [0, 600, 600, 0, 0],
          y: [0, 0, 300, 300, 0],
        }}
      ></motion.div>
    </div>
  )
}

export default FramerMotion
