import { ReactNode } from "react";
import { useUserCardContext } from "./UserCardContext";

export type Props = {
  children: ReactNode;
};

export default function UserIntro() {
  const { user } = useUserCardContext();
  return (
    <div className="user-intro">
      {user.info}
    </div>
  );
}
