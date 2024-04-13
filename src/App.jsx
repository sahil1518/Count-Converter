import Input from "./Input";
import Output from "./Output";
import { useState } from "react";

const App = () => {

  const [numberValue, setNumberValue] = useState('');
  const [systemValue, setSystemValue] = useState('');

  const handleSubmit = (number, system) => {
    setNumberValue(number);
    setSystemValue(system);
  }

  return (
    <>
      <Input onFormSubmit={handleSubmit} />
      <Output number={numberValue} system={systemValue} />
    </>
  )
}

export default App;