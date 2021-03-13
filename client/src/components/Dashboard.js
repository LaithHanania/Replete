import { useUser } from "../contexts/User/UserState";
import LoggedOutWarning from "./../commonComponents/LoggedOutWarning";
import Criteria from './Criteria';
import Events from './Events';

const Dashboard = () => {
  const [userState] = useUser();
  const { user } = userState;

  return !!user ? (
    <div>
      <Criteria />
      <Events />
    </div>
  ) : (
    <LoggedOutWarning />
  );
};

export default Dashboard;
