import React from 'react'
import UseFIrestore from '../hooks/UseFIrestore'
import { motion } from 'framer-motion';


const ImageGrid = ({ setSelectedImg}) => {
    const { docs } = UseFIrestore("images");
  return (
    <div className='img-grid'>
      {
        docs && docs.map(doc => (
          <motion.div
            layout
            whileHover={{ opacity: 1}}
            onClick={() => setSelectedImg(doc.url)} className='img-wrap' key={doc.id}>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={doc.url} alt="uploadedPic" />
          </motion.div>
        ))
      }
    </div>
  )
}

export default ImageGrid