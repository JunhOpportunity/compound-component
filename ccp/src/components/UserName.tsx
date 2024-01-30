import { ReactNode } from "react";

export default function UserName() {
  // Context
  const { user } = {
    user: {
      name: "이름",
    },
  };
  return <div>{user.name}</div>;
}
