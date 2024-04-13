
import React from "react";
import { motion } from 'framer-motion'

const AnsTable = ({ ans, systemValue }) => {

  return (
    <div className="ans-table"

    >
      {ans?.map((val, i) => {
        return (
          <motion.div className="ans-row" key={i}
            initial={{ x: '-100px' }}
            whileInView={{ x: '0px' }}
            transition={{ type: "spring", duration: '1' }}
          >
            <motion.div className="system-label"
              initial={{ y: '100px' }}
              whileInView={{ y: '0px' }}
              transition={{ type: "spring", duration: '1.5' }} >{systemValue[i]}</motion.div>
            <motion.div className="value"
              initial={{ y: '100px' }}
              whileInView={{ y: '0px' }}
              transition={{ type: "spring", duration: '1.5' }}
            >{val}</motion.div>
          </motion.div>
        );
      })}
    </div >
  );
};

export default AnsTable;