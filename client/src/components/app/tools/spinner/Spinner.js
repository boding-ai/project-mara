import React from 'react'
import Box from '@mui/material/Box';
import { motion } from 'framer-motion'

const Spinner = ({ color, size }) => {
    return (
        <>
            <div
                style={{ width: '100vw', height: '100vh' }}
                className="flex_middle"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1.5, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 0,
                    }}
                >
                    <div class="lds-hourglass"></div>
                </motion.div>
            </div>
        </>
    )
}


export default Spinner
