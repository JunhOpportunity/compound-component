import { useUserCardContext } from "./UserCardContext";

export default function ProfileImage() {
  const {user} = useUserCardContext();
  return (
    <div className="profile-image-box">
      <img className="profile-image" src={user.profileImage} />
    </div>
  );
}
