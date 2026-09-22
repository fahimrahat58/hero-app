"use client";

import type { Root2 } from "@/app/type/productType";
import { useAppContext } from "@/app/context/appContext";
import { toast } from "react-toastify";

const InstallButton = ({ app }: { app: Root2 }) => {
  const { installedApps, installApp, uninstallApp } = useAppContext();

  const isInstalled = installedApps.some((item) => item.id === app.id);

  const handleInstall = () => {
    installApp(app);
    toast.success(`${app.title} installed successfully!`);
  };

  const handleUninstall = () => {
    uninstallApp(app.id);
    toast.error(`${app.title} uninstalled!`);
  };

  if (isInstalled) {
    return (
      <button
        onClick={handleUninstall}
        className="btn btn-error btn-sm text-white w-full sm:w-auto px-4"
      >
        Uninstall
      </button>
    );
  }

  return (
    <button
      onClick={handleInstall}
      className="btn btn-success btn-sm text-white w-full sm:w-auto px-4"
    >
      Install Now ({app.size} MB)
    </button>
  );
};

export default InstallButton;
