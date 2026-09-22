"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Root2 } from "@/app/type/productType";

type AppContextType = {
  installedApps: Root2[];
  installApp: (app: Root2) => void;
  uninstallApp: (id: number) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [installedApps, setInstalledApps] = useState<Root2[]>([]);

  useEffect(() => {
    const savedApps = localStorage.getItem("installedApps");

    if (savedApps) {
      setInstalledApps(JSON.parse(savedApps));
    }
  }, []);

  const installApp = (app: Root2) => {
    setInstalledApps((prev) => {
      if (prev.some((item) => item.id === app.id)) {
        return prev;
      }

      const updatedApps = [...prev, app];

      localStorage.setItem("installedApps", JSON.stringify(updatedApps));

      return updatedApps;
    });
  };

  const uninstallApp = (id: number) => {
    setInstalledApps((prev) => {
      const updatedApps = prev.filter((app) => app.id !== id);

      localStorage.setItem("installedApps", JSON.stringify(updatedApps));

      return updatedApps;
    });
  };

  return (
    <AppContext.Provider
      value={{
        installedApps,
        installApp,
        uninstallApp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }

  return context;
};