"use client";
import { createContext, Dispatch, useState } from "react";

interface menuStatus {
  menuStatus: boolean;
  setMenuStatus: Dispatch<React.SetStateAction<boolean>>;
}

export const contextValues = createContext<menuStatus>({
  menuStatus: false,
  setMenuStatus: () => {},
});

export default function MenuStatusProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  let [menuStatus, setMenuStatus] = useState(false);

  let value: menuStatus = {
    menuStatus,
    setMenuStatus,
  };

  return (
    <contextValues.Provider value={value}>{children}</contextValues.Provider>
  );
}
