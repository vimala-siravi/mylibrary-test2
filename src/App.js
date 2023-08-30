import { Button, convertToLowerCase } from "@vimala-siravi/my-library";
import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText((prevState) => !prevState);
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="ml-5 text-center font-bold">
        {convertToLowerCase("BUTTON COMPONENT")}
      </h1>
      <Button variant="outlined" onClick={() => toggleText()}>
        Hello World
      </Button>

      {showText && <div className="mt-4">Hi there !</div>}
    </div>
  );
}

export default App;
