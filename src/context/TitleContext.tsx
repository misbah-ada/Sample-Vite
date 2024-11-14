// TitleContext.tsx
import { createContext, useContext, ReactNode } from 'react';

interface TitleContextType {
  title: string;
}

const TitleContext = createContext<TitleContextType | undefined>(undefined);

export const TitleProvider = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <TitleContext.Provider value={{ title }}>
      {children}
    </TitleContext.Provider>
  );
};

export const useTitle = () => {
  const context = useContext(TitleContext);
  if (!context) {
    throw new Error("useTitle must be used within a TitleProvider");
  }
  return context;
};
