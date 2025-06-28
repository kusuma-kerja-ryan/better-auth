// components/PageWrapper.tsx
'use client'

import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'motion/react'
import { ReactNode } from 'react'

export default function AnimateWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
