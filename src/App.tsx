import React from "react";

import MovieList from "./components/MovieList";

import { Section, Button } from "./styles";

const App = () => {
  return (
    <React.Fragment>
      <Section>
        <Button>Fetch movies</Button>
      </Section>
    </React.Fragment>
  );
};

export default App;
