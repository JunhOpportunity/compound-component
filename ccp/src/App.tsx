import './App.css';
import UserCard from './components/UserCard';

function App() {
  return (
    <UserCard>
      <UserCard.ProfileImage/>
      <UserCard.Info>
        <UserCard.Name/>
        <UserCard.Job/>
      </UserCard.Info>
    </UserCard>
  );
}

export default App;
