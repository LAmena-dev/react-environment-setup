import { useState } from "react";

export function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 100,
  });

  const fullName = person.firstName + " " + person.lastName;

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson({ ...person, age: person.age + 1 });
    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  const handleFirstName = (e) => {
    setPerson({ ...person, firstName: e.target.value });
  };

  const handleLastName = (e) => {
    setPerson({ ...person, lastName: e.target.value });
  };

  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log("during render: ", person);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="first name..."
        value={person.firstName}
        onChange={handleFirstName}
      />
      <input
        placeholder="last name..."
        value={person.lastName}
        onChange={handleLastName}
      />

      <h1>{fullName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </form>
  );
}

// State as a snapshot
export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    alert(walk ? "Stop is next" : "Walk is next");
  }

  return (
    <>
      <button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
      <h1
        style={{
          color: walk ? "darkgreen" : "darkred",
        }}
      >
        {walk ? "Walk" : "Stop"}
      </h1>
    </>
  );
}

// Sharing State Between Components
// 1

