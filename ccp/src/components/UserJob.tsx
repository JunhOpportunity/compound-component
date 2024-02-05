import { ReactNode } from "react";

export default function UserJob() {
  // Context
  const { user } = {
    user: {
      job: "개발자",
    },
  };
  return <div className="user-job">{user.job}</div>;
}
