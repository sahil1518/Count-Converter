import { useEffect, useState } from "react";
import { logic } from "../logic";
import { systemValue } from "../logic";
import AnsTable from "./AnsTable";


const Output = ({ number, system }) => {

  const [ansArray, setAnsArray] = useState([]);


  useEffect(() => {
    const data = logic(system, number);
    setAnsArray(data);
  }, [system, number])


  return (
    <>
      <div className="output-container">
        <div className="output-number">
          <AnsTable ans={ansArray} systemValue={systemValue()} />
        </div>
      </div>
    </>
  )

}

export default Output;