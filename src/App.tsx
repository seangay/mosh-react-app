import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

function App() {
  // const [alertVisible, setAlertVisibility] = useState(false);

  // const groups = ["one", "two", "three"];

  return (
    <div>
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        illo totam sit optio tenetur delectus assumenda possimus eveniet earum
        ducimus commodi aliquid nobis maxime nemo vitae, cum impedit illum enim?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        illo totam sit optio tenetur delectus assumenda possimus eveniet earum
        ducimus commodi aliquid nobis maxime nemo vitae, cum impedit illum enim?
      </ExpandableText>
    </div>
  );
}

export default App;

// https://github.com/mosh-hamedani/react-course-part1
