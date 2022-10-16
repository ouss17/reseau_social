import { createContext } from "react";

const SettingsContext = createContext({
    background: "white",
    textColor: "black",
    darkMode: true,
    isLogged: false,
    fontSize: "12px",
});

export const SettingsContextProvider = SettingsContext.Provider;

export default SettingsContext;