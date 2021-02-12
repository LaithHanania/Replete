import { useUser } from "../contexts/User/UserState";
import LoggedOutWarning from "./../commonComponents/LoggedOutWarning";
import Criteria from './Criteria';

const Dashboard = () => {
  const [userState] = useUser();
  const { user } = userState;

  return !!user ? (
    <div>
      <Criteria />
    </div>
  ) : (
    <LoggedOutWarning />
  );
};

export default Dashboard;
