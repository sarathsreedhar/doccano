import React ,{createContext , useState } from "react";

export const ThemeModeContext = createContext();

export const ThemeModeProvider = (props)=>{
    
    const [isDarkMode, setisDarkMode] = useState(false);

    const toggleThemeMode = () =>{
        setisDarkMode(!isDarkMode);
    };
    return(
        <ThemeModeContext.Provider value={ {isDarkMode , toggleThemeMode }} >
            {props.children}
        </ThemeModeContext.Provider>
    )
};


