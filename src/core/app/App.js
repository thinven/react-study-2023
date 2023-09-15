import { BrowserRouter as Router } from "react-router-dom";

import Container from "./Container";
import Routing from "./Routing";

function App() {
  return (
    <>
      <Router>
        <Container>
          <Routing />
        </Container>
      </Router>
    </>
  );
}

export default App;
