import { createContext, useContext } from "react";

export const MenuContext = createContext();

export function useGetMenuContext() {
  return useContext(MenuContext);
}

const MenuContextProvider = ({ children }) => {
  return <MenuContext.Provider value={{}}>{children}</MenuContext.Provider>;
};

export default MenuContextProvider;
