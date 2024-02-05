import { ReactNode } from "react";

export default function UserName() {
  // Context
  const { user } = {
    user: {
      name: "김준호",
    },
  };
  return <div className="user-name">{user.name}</div>;
}
