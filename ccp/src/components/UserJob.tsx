import { useUserCardContext } from "./UserCardContext";

export default function UserJob() {
  const { user } = useUserCardContext();
  return <div className="user-job">{user.job}</div>;
}
