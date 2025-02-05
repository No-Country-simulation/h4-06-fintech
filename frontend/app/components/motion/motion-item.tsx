"use client"

import { motion, HTMLMotionProps, Variants } from 'motion/react'
import { forwardRef } from 'react'

type Props = HTMLMotionProps<"li">

const variants: Variants = {
  visible: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: 100,
    opacity: 0,
  }
}


const MItem = forwardRef<HTMLLIElement, Props>(({ ...props }, ref) => (
  <motion.li variants={variants} ref={ref} {...props} />
))

MItem.displayName = "MItem"

export { MItem }