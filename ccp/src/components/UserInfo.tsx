import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
};

export default function UserInfo({ children }: Props) {
  return <div>{children}</div>;
}
