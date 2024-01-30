import { ReactNode } from "react";

export default function UserJob() {
  // Context
  const { user } = {
    user: {
      job: "직업",
    },
  };
  return <div>{user.job}</div>;
}
