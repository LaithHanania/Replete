import { useUser } from "../contexts/User/UserState";
import LoggedOutWarning from "./../commonComponents/LoggedOutWarning";

const Dashboard = () => {
  const [userState] = useUser();
  const { user } = userState;

  return !!user ? <div>Logged in </div> : <LoggedOutWarning />;
};

export default Dashboard;
