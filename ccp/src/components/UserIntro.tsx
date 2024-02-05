import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
};

export default function UserIntro() {
  return <div className="user-intro">풀스택 개발자가 되기 위해 준비중인 프론트엔드 개발자입니다.</div>;
}
