import UserCard from "./components/UserCard";
import { User } from "./types/user";

const user: User = {
  profileImage:
    "https://firebasestorage.googleapis.com/v0/b/responses-chat-project.appspot.com/o/profileImage%2Fqj4PwO2e4za0N7NkCLq6JfodLty1?alt=media&token=1adb9930-7fc1-422d-a59b-4cca8bf95ea8",
  name: "김준호",
  nickname: "junhopportunity",
  job: "개발자",
  info: "풀스택 개발자가 되기 위해 준비중인 프론트엔드 개발자입니다.",
};

function App() {
  return (
    <UserCard user={user}>
      <UserCard.ProfileImage />
      <UserCard.Name />
      <UserCard.Job />
      <UserCard.Info />
      <UserCard.Navigate />
    </UserCard>
  );
}

export default App;
