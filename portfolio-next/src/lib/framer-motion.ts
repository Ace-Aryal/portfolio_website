import { Variants } from 'motion/react'
export const fadeInAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      delay: 0.03 * index,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
}
