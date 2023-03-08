import { motion, Variants } from 'framer-motion';

export default function Item({ item, col, color }: { item: number; col: number; color: string }) {
  const variants: Variants = {
    animate: {
      backgroundColor: color,
      transition: {
        duration: 0.5 + item * 0.1 + col * 0.1,
        delay: item * 0.1 + col * 0.1,
      },
    },
  };

  return <motion.div className={`grid-item${item} grid-item`} animate="animate" variants={variants} />;
}
