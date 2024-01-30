import { ReactNode } from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserJob from "./UserJob";
import UserName from "./UserName";

export type Props = {
  children: ReactNode;
};

export default function UserCard({ children }: Props) {
  return <div>{children}</div>;
}

UserCard.ProfileImage = ProfileImage;
UserCard.Info = UserInfo;
UserCard.Job = UserJob;
UserCard.Name = UserName;
