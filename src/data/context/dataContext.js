import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [asmtAnswers, setAsmtAns] = useState(0);
  const [initialSection, setInitialSection] = useState("one");

  return (
    <DataContext.Provider
      value={{
        asmtAnswers,
        setAsmtAns,
        initialSection,
        setInitialSection,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
