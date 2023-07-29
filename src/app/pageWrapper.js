"use client"

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const PageWrapper = ({ children }) => {
    const key = usePathname().toString()
  return (
    <>
        <AnimatePresence mode='await' initial={false}>

            <motion.div
                key={key}
                variants={{
                    initial: { opacity: 0, y: -1000 },
                    animate: { opacity: 1, y:0 },
                    exit: { opacity: 0, y: 1000 },
                }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                initial="initial"
                animate="animate"
                exit="exit"

            >
                {children}
            </motion.div>
        </AnimatePresence>
    </>
  )
}

export default PageWrapper