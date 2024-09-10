import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { BsFillCalendarFill } from "react-icons/bs";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const groups = ["one", "two", "three"];

  return (
    <div>
      <BsFillCalendarFill color="red" size="50" />
      <ListGroup
        heading="List"
        items={groups}
        onSelectItem={() => {}}
      ></ListGroup>
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
