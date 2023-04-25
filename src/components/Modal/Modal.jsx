import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './modal.module.css';
import Task from '../Task/Task';

export default function Modal({
  active, setActive, taskId,
}) {
  const navigate = useNavigate();
  const featureAnimation = {
    hidden: {
      y: 300,
      opacity: 0,
    },
    visible: () => ({
      y: 0,
      opacity: 1,
    }),
  };

  const handleClick = () => {
    setActive(false);
    navigate('/tasks');
  };

  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={handleClick}
    >
      <motion.div
        transition={{
          duration: 0.5,
        }}
        initial="hidden"
        whileInView="visible"
        variants={featureAnimation}
        viewport={{ amount: 0, once: true }}
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <Task setActive={setActive} taskId={taskId} />
      </motion.div>
    </div>
  );
}
