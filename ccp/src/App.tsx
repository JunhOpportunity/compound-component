import UserCard from "./components/UserCard";

function App() {
  return (
    <UserCard>
      <UserCard.ProfileImage />
      <UserCard.Name />
      <UserCard.Job />
      <UserCard.Info />
      <UserCard.Navigate />
    </UserCard>
  );
}

export default App;
