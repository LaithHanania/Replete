import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useUser } from "./contexts/User/UserState";
import { getUser, setLoading } from "./contexts/User/UserAction";
import AppHeader from "./components/AppHeader";
import Container from "@material-ui/core/Container";
import AboutUs from "./components/AboutUs";

const App = () => {
  const [, userDispatch] = useUser();
  const fetchUser = async () => {
    await getUser(userDispatch);
    setLoading(userDispatch, false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

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
