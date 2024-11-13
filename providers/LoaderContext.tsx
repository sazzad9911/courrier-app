// LoaderContext.tsx
import Loader from "@/components/Loader";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface LoaderContextType {
  showLoader: () => void;
  hideLoader: () => void;
  isLoading: boolean;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const useLoader = (): LoaderContextType => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
};

interface LoaderProviderProps {
  children: ReactNode;
}

export const LoaderProvider: React.FC<LoaderProviderProps> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const showLoader = () => setVisible(true);
  const hideLoader = () => setVisible(false);

  return (
    <LoaderContext.Provider
      value={{ showLoader, hideLoader, isLoading: visible }}
    >
      {children}
      <Loader visible={visible} />
    </LoaderContext.Provider>
  );
};
