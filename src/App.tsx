import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import { useState } from "react";
import { IoCalendarClear } from "react-icons/io5";
import Like from "./components/Like";

function App() {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  const handleSelectItem = (item: string) => {
    console.log("You selected: " + item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {/* <ListGroup
        items={items}
        heading="List Group Heading"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>It is an Alert!</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button> */}
      <Like onClick={() => console.log("You clicked the Like button!")} />
    </>
  );
}

export default App;
