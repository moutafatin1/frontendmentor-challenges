import { motion, AnimatePresence } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export const Fade = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};
