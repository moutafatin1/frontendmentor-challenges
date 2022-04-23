import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className: string;
};

export const StartAnimation = ({ children, className }: Props) => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
