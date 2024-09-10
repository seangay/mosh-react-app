import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const groups = ["one", "two", "three"];

  return (
    <div>
      <Like
        onClick={() => {
          console.log("clicked");
        }}
      />
    </div>
  );
}

export default App;

// https://github.com/mosh-hamedani/react-course-part1
