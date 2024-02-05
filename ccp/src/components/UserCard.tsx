import { ReactNode } from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserIntro";
import UserJob from "./UserJob";
import UserName from "./UserName";
import './UserCard.css'
import NavigateButton from "./NavigateButton";

export type Props = {
  children: ReactNode;
};

export default function UserCard({ children }: Props) {
  return <div className="user-card">{children}</div>;
}

UserCard.ProfileImage = ProfileImage;
UserCard.Info = UserInfo;
UserCard.Job = UserJob;
UserCard.Name = UserName;
UserCard.Navigate = NavigateButton;
