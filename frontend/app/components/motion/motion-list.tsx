"use client"

import { motion, HTMLMotionProps, Variants } from 'motion/react'
import { forwardRef } from 'react'

type Props = HTMLMotionProps<"ul">

const variants: Variants = {
  visible: {
    transition: {
      // when: "beforeChildren",
      staggerChildren: 0.03, // Stagger children by .3 seconds
    },
  },
  hidden: {
  }
}

const MList = forwardRef<HTMLUListElement, Props>(({ ...props }, ref) => (
  <motion.ul animate="visible" initial="hidden" variants={variants} ref={ref} {...props} />
))

MList.displayName = "MList"

export { MList }