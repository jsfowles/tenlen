import React from "react";
import Card from "../components/Card";
import { DATA } from "../mocks/data";
import Button from "../components/Button";

const Home = () => {
  const [toggleCard, setToggleCard] = React.useState(false);

  return (
    <main className="place-content-center grid">
      {toggleCard ? (
        <Card data={DATA} setToggleCard={setToggleCard} />
      ) : (
        <Button onClick={() => setToggleCard(true)}>Click Me</Button>
      )}
    </main>
  );
};
export default Home;
