// Type utility to work around Framer Motion className issues
export {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'motion.div': any
      'motion.h1': any
      'motion.h2': any
      'motion.p': any
      'motion.section': any
    }
  }
}
