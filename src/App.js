import { useState, useEffect } from "react";
import "./App.css";
import Button from "./Components/Button";
import Card from "./Components/Card";
import profiles from "./Components/FakeData";
import FakeData from "./Components/FakeData";

function App() {
  const age = "200";
  const [count, setCount] = useState(0);
  const [fullName, setFullName] = useState("Content is loading");

  const getRandomName = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    console.log(data.results[0].name);
    setFullName(data.results[0].name.first + " " + data.results[0].name.last);
  };

  useEffect(() => {
    getRandomName();
  }, []);

  return (
    <div>
      <h2 style={{ color: "white" }}>My count is {count}</h2>;
      <button onClick={() => setCount(count + 1)}>Add count</button>;
      {count && (
        <button onClick={() => setCount(count - 1)}>Decrease count</button>
      )}
      <button onClick={() => window.location.reload()}>Reload page</button>
      <input type="text" id="name" placeholder="enter anything" />
      <Button buttonTag="Hi" color="red" />
      <Button buttonTag="Akshay" color="purple" />
      {profiles.map((profile) => (
        // <Card image={profile.image}
        <Card
          image={`https://robohash.org/${Math.random()}.png`}
          nameTag={fullName}
        />
      ))}
    </div>
  );
}

export default App;
