'use client';
import { motion } from 'framer-motion';

const transitionVariants = {
    initial: {
        x: '100%',
        width: '100%'
    },
    animate: {
        x: '0',
        width: '0%',
        transition: {
            delay: 0.2,
            duration: 0.6,
            ease: 'easeInOut'
        }
    },
    exit: {
        x: ['0%', '100%'],
        width: ['0%', '100%'],
        transition: {
            duration: 0.4,
            ease: 'easeInOut'
        }
    }
}

const Transition = () => {
    return (
        <>
            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#252B39]'
                variants={transitionVariants}
                initial='initial'
                animate='animate'
                exit='exit'
            ></motion.div>
        </>
    );
}

export default Transition;
