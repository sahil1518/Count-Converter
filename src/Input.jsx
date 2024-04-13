import React, { useState } from 'react';
import { motion } from "framer-motion"

const Input = ({ onFormSubmit }) => {

  const [number, setNumber] = useState();
  const [system, setSystem] = useState('Select');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    onFormSubmit(number, system);
  };

  return (
    <>
      <motion.div
        initial={{ y: '-200px', opacity: "0" }}
        whileInView={{ y: '0px', opacity: "1" }}
        transition={{ type: "spring", delay: '1' }}
      >
        <form onSubmit={handleSubmit}>
          {/* Input Field */}
          <input
            type="number"
            id="number"
            name="number"
            placeholder="Enter the number"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          {/* Select Dropdown */}
          <select
            id="system"
            name="system"
            required
            value={system}
            onChange={(e) => setSystem(e.target.value)}
          >
            <option value="Select">Select</option>
            <option value="Tex">Tex</option>
            <option value="Denier">Denier</option>
            <option value="Grist">Grist</option>
            <option value="English">English</option>
            <option value="Woollen">Woollen</option>
            <option value="Linen">Linen</option>
            <option value="Worsted">Worsted</option>
            <option value="Dewsbury">Dewsbury</option>
            <option value="Decitex">Decitex</option>
            <option value="Metric">Metric</option>
          </select>

          {/* Button */}
          <button type="submit">Submit</button>
        </form>
      </motion.div>
    </>
  )
}

export default Input;