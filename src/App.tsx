import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button color="light" onClick={() => setAlertVisibility(true)}>
        I have a button
      </Button>
    </div>
  );
}

export default App;


// https://github.com/mosh-hamedani/react-course-part1