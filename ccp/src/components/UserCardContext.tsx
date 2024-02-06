import { createContext, useContext } from "react";
import { User } from "../types/user";

const UserCardContext = createContext<{ user: User } | null>(null);

export function useUserCardContext() {
  const context = useContext(UserCardContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
}

export default UserCardContext;
