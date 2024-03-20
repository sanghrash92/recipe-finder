import { Popular } from "../components/popular"
import { Italian } from "../components/italian"
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      animate={{opacity: 1 }}
      initial={{opacity: 0 }}
      exit={{opactiy: 0 }}
      transition = {{duration: 0.5 }}
    >
        <Popular />
        <Italian />
    </motion.div>
  )
}

export default Home