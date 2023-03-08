import { motion, Variants } from 'framer-motion';
import React from 'react';
import Item from './Item';

export default function GridCol({
  gridCol,
  colYCoordinate,
  colors,
}: {
  gridCol: number;
  colYCoordinate: number;
  colors: string[];
}) {
  const variants: Variants = {
    animate: {
      y: [colYCoordinate, 20 + colYCoordinate, colYCoordinate],
    },
  };

  return (
    <motion.div
      animate="animate"
      variants={variants}
      transition={{
        duration: 12,
        repeat: Infinity,
      }}
      className={`grid-col${gridCol} grid-col`}>
      <Item item={1} col={gridCol} color={colors[0]} />
      <Item item={2} col={gridCol} color={colors[1]} />
    </motion.div>
  );
}
