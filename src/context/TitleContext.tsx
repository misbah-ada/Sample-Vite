import  { createContext, useContext } from "react";

// Create the context
const TitleContext = createContext();

// Export the context to be used in other components
export const useTitle = () => useContext(TitleContext);

// Provide the context
export const TitleProvider = ({ children, value }) => (
  <TitleContext.Provider value={value}>{children}</TitleContext.Provider>
);
