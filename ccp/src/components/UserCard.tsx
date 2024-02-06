import { ReactNode } from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserIntro";
import UserJob from "./UserJob";
import UserName from "./UserName";
import "./UserCard.css";
import NavigateButton from "./NavigateButton";
import UserCardContext from "./UserCardContext";
import { User } from "../types/user";

export type Props = {
  children: ReactNode;
  user: User;
};

export default function UserCard({ children, user }: Props) {
  return (
    <UserCardContext.Provider value={{user}}>
      <div className="user-card">{children}</div>
    </UserCardContext.Provider>
  );
}

UserCard.ProfileImage = ProfileImage;
UserCard.Info = UserInfo;
UserCard.Job = UserJob;
UserCard.Name = UserName;
UserCard.Navigate = NavigateButton;
