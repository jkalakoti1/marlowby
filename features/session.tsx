"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import type { PlanId } from "@/lib/domain.mts";
const Context = createContext<{
  completion: PlanId | null;
  setCompletion: (p: PlanId | null) => void;
}>({ completion: null, setCompletion: () => {} });
export function Session({ children }: { children: React.ReactNode }) {
  const [completion, setCompletion] = useState<PlanId | null>(null);
  const path = usePathname();
  // Clear the ephemeral completion on route departure; this synchronizes the session with browser navigation.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!path.startsWith("/checkout")) setCompletion(null);
    const h = document.querySelector("main");
    if (h && !location.hash) h.focus({ preventScroll: true });
  }, [path]);
  return (
    <Context.Provider value={{ completion, setCompletion }}>
      {children}
    </Context.Provider>
  );
}
export const useDemo = () => useContext(Context);
