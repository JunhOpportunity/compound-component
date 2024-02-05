import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
};

export default function ProfileImage() {
  return (
    <div className="profile-image-box">
      <img className="profile-image" src="https://firebasestorage.googleapis.com/v0/b/responses-chat-project.appspot.com/o/profileImage%2Fqj4PwO2e4za0N7NkCLq6JfodLty1?alt=media&token=1adb9930-7fc1-422d-a59b-4cca8bf95ea8" />
    </div>
  );
}
