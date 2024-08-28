import "./App.css";
import userData from "./data/UserData";
import friends from "./data/friends";
import transactions from "./data/transactions";
import Profile from "./components/profile/Profile";
import FriendList from "./components/friendlist/FriendList";
import TransactionHistory from "./components/transactionhistory/TransactionHistory";
function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
