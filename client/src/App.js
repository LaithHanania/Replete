import { BrowserRouter as Router, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import Container from "@material-ui/core/Container";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <Router>
      <Container>
        <AppHeader />
        <Route path="/about" component={AboutUs} />
      </Container>
    </Router>
  );
};

export default App;
