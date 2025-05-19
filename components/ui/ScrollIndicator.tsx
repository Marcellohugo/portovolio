"use client"
import { motion } from "framer-motion"

interface ScrollIndicatorProps {
  onClick: () => void
}

export default function ScrollIndicator({ onClick }: ScrollIndicatorProps) {
  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer"
      onClick={onClick}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="text-white text-sm mb-2">Scroll Down</div>
      <motion.div
        className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-1 h-3 bg-white rounded-full"
          animate={{
            opacity: [1, 0.5, 1],
            height: [3, 5, 3],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  )
}
