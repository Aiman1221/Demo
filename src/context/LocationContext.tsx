import React, { createContext, useContext, useState, ReactNode } from "react";

interface LocationContextType {
  location: string | null;
  setLocation: (loc: string | null) => void;
  isLocationOpen: boolean;
  setIsLocationOpen: (isOpen: boolean) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(
  undefined,
);

export const LocationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [location, setLocation] = useState<string | null>(null);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  return (
    <LocationContext.Provider
      value={{ location, setLocation, isLocationOpen, setIsLocationOpen }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error(
      "useLocationContext must be used within a LocationProvider",
    );
  }
  return context;
};
