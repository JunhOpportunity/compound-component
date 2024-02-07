import { useUserCardContext } from "./UserCardContext";

export default function UserName() {
  const { user } = useUserCardContext();
  return <div className="user-name">{user.name}</div>;
}
